const test = require('./test')
const vm = require('vm')
const sendToOutput = require('./output')
const fs = require('fs')

const PARSING_TIMEOUT = 1000;
const EXECUTION_TIMEOUT = 5000;

const context = {
  module: {}
}


const sandbox = vm.createContext(context);
const fileName = 'app-logic.js';

fs.readFile(fileName, 'utf8', (err, src) => {
  if (err) throw err

  // Run an application in sandboxed context
  let script;
  try {
    script = new vm.Script(src, { timeout: PARSING_TIMEOUT });
  } catch (e) {
    console.dir(e);
    process.exit(1);
  }

  try {
    script.runInNewContext(sandbox, { timeout: EXECUTION_TIMEOUT });
    const exported = sandbox.module.exports;
    result = exported(test.test, test.subject);
    // console.log(test.test);
    sendToOutput(result)
  } catch (e) {
    console.dir(e);
    process.exit(1);
  }

});
