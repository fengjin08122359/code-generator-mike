const requiredPackageVersion = require('../package.json').version;
const program = require('commander');
const clearConsole = require('./util/clearConsole');
const pool = require('./util/execPool')
const path = require('path');

let programConfig = ()=> {
  program.version(requiredPackageVersion)
  .usage('<command> [options]');

  program.command('version')
    .description('getVersion')
    .action(async(name, cmd) => {
      console.log('v' + requiredPackageVersion);
    });


  program.command('start [port]')
    .description('code-generator start server')
    .action(async(port, cmd) => {
      if (!port) {
        port = 19090
      }
      pool.exec('npm run start:redis')
      pool.exec('npm run start:server')
      clearConsole('cyan', `code-generator v${requiredPackageVersion}`);
    });
  program.parse(process.argv);
}

module.exports = function initialization() {
 // commander 配置
  programConfig();
};