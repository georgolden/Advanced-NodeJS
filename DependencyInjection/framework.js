// Framework creates an environment (sandbox) for app runtime
// load an app code and passes a sandbox into app as a global context
// and recieves exported app interface

// Framework  can require core libs

global.api = {};
api.fs = require('fs');
api.vm = require('vm');
api.sandboxedFs = require('sandboxed-fs');

const { cloneInterface, wrapFunction } = require('wrapper');

const log = (s) => {
  console.log('Prints something from sandbox');
  console.log(s);
};

const safeRequire = (name) => {
  if (name === 'fs') {
    const message = 'You dont have access to fs API';
    console.log(message);
    return new Error(message);
  } else {
    return require(name);
  }
};

const runSandboxed = (path) => {
  const fileName = path + 'main.js';
  const context = {
    module: {},
    require: safeRequire,
    api: {
      console: { log },
      timers: {
        setTimeout: wrapFunction('setTimeout', setTimeout),
      },
      fs: cloneInterface(api.sandboxedFs.bind(path)),
    },
  };
  context.global = context;
  const sandbox = api.vm.createContext(context);
  api.fs.readFile(fileName, (err, src) => {
    if (err) throw err;

    // run app in sandboxed context
    const script = new api.vm.Script(src, fileName);
    const wrapScript = script.runInNewContext(sandbox);
    if (wrapScript) wrapScript();

    // we can access a link to exported interface from sandbox.module.exports
    // to execute, save to the cache, print to console, etc.
  });
};

runSandboxed('./applications/application1/');
runSandboxed('./applications/application2/');
