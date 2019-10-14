const requiredPackageVersion = require('../package.json').version;
const program = require('commander');
const clearConsole = require('./util/clearConsole');
const pool = require('./util/execPool')
const path = require('path');
const fs = require('fs');

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
      var pid = pidtxt.get()
      if (pid) {
        pool.exec(`taskkill /pid ${pid} -t -f`)
        pidtxt.set('')
      }
      var curpath = path.resolve(__dirname)
      var redispath = path.resolve(__dirname, '../redis')
      var serverpath = path.resolve(__dirname, '../server')
      var redisprocess = pool.exec(`cd /d ${redispath} && redis-server.exe redis.windows.conf`)
      var severprocess = pool.exec(`cd /d ${serverpath} && npm start`)
      pidtxt.set(process.pid)
      clearConsole('cyan', `code-generator v${requiredPackageVersion}`);

    });
    program.command('stop')
    .description('code-generator stop server')
    .action(async(port, cmd) => {
      var pid = pidtxt.get()
      if (pid) {
        pool.exec(`taskkill /pid ${pid} -t -f`)
        pidtxt.set('')
      }
      clearConsole('cyan', `code-generator v${requiredPackageVersion}`);

    }); 
  program.parse(process.argv);
}

let pidtxt = {
  get() {
    return fs.readFileSync(path.resolve(__dirname, './pid.txt'),'utf-8') || '';
  },
  set (val) {
    fs.writeFileSync(path.resolve(__dirname, './pid.txt'), val, 'utf8');
  }
}

module.exports = function initialization() {
 // commander 配置
  programConfig();
};