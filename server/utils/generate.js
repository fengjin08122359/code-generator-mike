const fse = require('fs-extra');
const fs = require('fs'); 
const path = require('path');
const {
  lowerCamelCase,
  upperCamelCase
} = require('./camel')
const {
  editorConfigInJs,
  editorConfigInVue,
  editorConfigInRouter,
  editorConfigInHttp,
  editorConfigInAxios
} = require('./editor')
var {db} = require('../redis/index')
const components_path = path.resolve(__dirname, '../template/components');
const component_path = path.resolve(__dirname, '../template/component');
const pages_path = path.resolve(__dirname, '../template/pages');
const projectsrc_path = path.resolve(__dirname, '../template/projectsrc');
const project_path = path.resolve(__dirname, '../template/project');
const postman_path = path.resolve(__dirname, '../template/postman');
const aim_dest_path = path.resolve(__dirname, '../aim/src');
const public_dest_path = path.resolve(__dirname, '../public/dist');
require('shelljs/global');

async function createZip(isproject) {
  deletePath(public_dest_path);
  if (isproject) {
    await copyByPath(project_path, path.resolve(public_dest_path))
  }
  await copyByPath(aim_dest_path, path.resolve(public_dest_path, './src'))
  exec(`cd ${public_dest_path} && jar -cvf ../server/dist.zip *`)
  deletePath(public_dest_path);
}

async function  generateHttplink (data) {
  await copyByPath(path.resolve(postman_path), path.resolve(aim_dest_path))
  await modifyHttplink(data)
}
async function  modifyHttplink (data) {
  const http_path =  path.resolve(aim_dest_path, 'http.js')
  const axios_path =  path.resolve(aim_dest_path, 'axios.js')
  var nameList= [];
  data.forEach(item => {
    if (item.name != '') {
      if (nameList.filter(target => target.name == item.name).length == 0) {
        nameList.push({
          name: item.name,
          time: 0
        })
      } else {
        var t = nameList.filter(target => target.name == item.name)[0]
        t.time++
        item.name = item.name + '_' + t.time
      }
    }
  })
  let httpConfig = ''
  let axiosConfig = ''
  let axiosExportConfig = ''
  data.forEach(item => {
    var inArray = []
    var outArray = []
    for (const key in item.data) {
      if (item.data.hasOwnProperty(key)) {
        inArray.push(`${key}='${item.data[key]}'`)
        outArray.push(`${key}`)
      }
    }
    httpConfig += `${item.name} ({${inArray.join(',')}}){
      return httplink('${item.name}', \`${item.url}\`,{${outArray.join(',')}}, '${item.type}')
    },
    `
    axiosConfig += `var ${item.name} = ({${inArray.join(',')}}) => {
  return httpInstance.${item.type}(\`${item.url}\`, {${outArray.join(',')}})
};
`
    axiosExportConfig += `${item.name},
`
  });
  editorConfigInHttp(http_path, httpConfig)
  editorConfigInAxios(axios_path, axiosConfig, axiosExportConfig)
}

async function  generateRouters (data) {
  var json = []
  if (data && data != '[]') {
    // json = JSON.parse(data);
    json = data
    await copyByPath(projectsrc_path, aim_dest_path)
    modifyRouter(data)
  }
  return json
}

function modifyRouter (data) {
  const router_path = path.resolve(aim_dest_path, './router/index.js');
  let routerConfig = ''
  let routes = ''
  data.forEach(item => {
    var name = item.alias || item.id
    let lowerchild = lowerCamelCase(name)
    let upperchild = upperCamelCase(name)
    routerConfig += `const ${upperchild} = () => import('../pages/${lowerchild}/${upperchild}.vue');\r\n`
    routes += `{path: '${item.path}',name: '${item.name}',component: ${upperchild}},`
  });
  routerConfig += `var routes = [${routes}];`
  editorConfigInRouter(router_path, routerConfig)
}

async function  generatePages (id, data) {
  if (data && data != '[]') {
    // console.log(data);
    // var json = JSON.parse(data);
    var json = data;
    await copyByPath(pages_path, aim_dest_path)
    await generateComponent(id, json, aim_dest_path, './pages/')
  }
}

async function  generateComponents (id, data) {
  if (data && data != '[]') {
    var json = JSON.parse(data);
    //copy components from template
    await copyByPath(components_path, aim_dest_path)
    await generateComponent(id, json, aim_dest_path, './components/')
  }
}
async function  generateComponent (id, data, dest_path, to_path) {
  // console.log(name, data, dest_path)
  var name = await db.getArrangeAlias(id);
  const lower = lowerCamelCase(name)
  const upper = upperCamelCase(name)
  const componentDest_path = path.resolve(dest_path, to_path+lower);
  //新建一个 component 
  await initComponent(lower, upper, component_path ,componentDest_path)
  //遍历data 修改js和vue
  await modifyComponent(lower, upper, data, componentDest_path)
}
function clearAim () {
  var aimpath = path.resolve(__dirname, '../aim/src');
  deletePath(aimpath)
}
function deletePath (cur_path) {
  var files = [];
	if(fs.existsSync(cur_path)) {
		files = fs.readdirSync(cur_path);
		files.forEach(function(file, index) {
			var curPath = cur_path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) {
				deletePath(curPath);
			} else { 
				fs.unlinkSync(curPath);
			}
    });
    fs.rmdirSync(cur_path);
	}
}

function copyByPath (src ,dest) {
  return new Promise(resolve => {
    if (!fs.existsSync(dest)) {
      fse.copy(src, dest)
      .then(() => {
        resolve()
      });
    } else {
      resolve()
    }
  })
}

function initComponent (lower, upper, src ,dest) {
  return new Promise(resolve => {
    fse.copy(src, dest)
    .then(() => {
      let componentVue = path.resolve(dest, 'Component.vue');
      let componentJs = path.resolve(dest, 'index.js');
      var componentVueData = fs.readFileSync(componentVue,'utf-8');
      var newComponentVueData = componentVueData.replace(/component/g, lower).replace(/Component/g, upper)
      fs.writeFileSync(path.resolve(dest, upper + '.vue'), newComponentVueData, 'utf8');
      fs.unlinkSync(componentVue)
      var componentJsData = fs.readFileSync(componentJs,'utf-8');
      var newComponentJsData = componentJsData.replace(/component/g, lower).replace(/Component/g, upper)
      fs.writeFileSync(componentJs, newComponentJsData, 'utf8');
      resolve()
    });
  })
}

async function modifyComponent (lower, upper, data, dest_path ) {
  // console.log(name, data, dest_path )
  var dataConfig = ''
  var templateConfig = ''
  var importConfig = ''
  var compConfig = ''
  let compList = []
  for(let item of data){
    var target = {
      style: item.style,
      raw: item.raw,
      type: item.type
    }
    var childrenTemplate = ''
    var alias = item.alias || item.id
    dataConfig += `this["${alias}"] = ${JSON.stringify(target)};\r\n`
    if (item.children.length > 0 && item.childrenName) {
      var childrenName = await db.getArrangeAlias(item.childrenName);
      let lowerchild = lowerCamelCase(childrenName)
      let upperchild = upperCamelCase(childrenName)
      childrenTemplate = `<${upperchild}></${upperchild}>`
      importConfig += `import ${upperchild} from '@/components/${lowerchild}/${upperchild}'\r\n`
      compList.push(upperchild)
      generateComponent(item.childrenName, item.children, aim_dest_path, './components/')
    }
    templateConfig += `<${item.type} :rawData='${lower}["${alias}"].raw' :style='${lower}["${alias}"].style'>${childrenTemplate}</${item.type}>\r\n`
  }
  if (compList.length > 0) {
    compConfig = `components:{${compList.join(',')}}`
  }
  // console.log(importConfig, compConfig, compList)
  let componentVue = path.resolve(dest_path, upper + '.vue');
  let componentJs = path.resolve(dest_path, 'index.js');
  editorConfigInJs(componentJs, dataConfig)
  editorConfigInVue(componentVue, templateConfig,importConfig, compConfig)
}

module.exports = {
  generateComponents,
  generatePages,
  generateRouters,
  generateHttplink,
  clearAim,
  createZip,
}