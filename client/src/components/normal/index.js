import {Handle, DataHandle,rgHandle} from 'nclient-microfront';
import Vue from 'vue'
import Ndiv from './ndiv/Ndiv'
import Nlabel from './nlabel/Nlabel'
function upperCamelCase(str){ 
  var reg = /\b(\w)|\s(\w)/g; 
  return str.replace(reg,function(m){return m.toUpperCase()}) 
}
class Normal extends DataHandle{
  constructor() {
    super('normalComp')
    
    this.list = [{
      type: 'ndiv',
      name: 'div(可使用子组件)',
      comps: Ndiv
    },{
      type: 'nlabel',
      name: 'label',
      comps: Nlabel
    }]
    this.comps = this.list.reduce((total,item) => {
      total[upperCamelCase(item.type)] = item.comps
      return total
    },{})
    this.list.forEach(item => {
      Vue.component(item.comps.name,item.comps)
      rgHandle.compList.add(item.type, item.comps.data().raw || {}, item.comps.data().style || {})
    })
  }
  init () {
    console.log('Normal init')
  }
}

let normal = new Normal()

let handle = new Handle({
  name: 'normalComp',
  created () {
    normal.init()
    console.log('normal created')
  },
  mounted () {
    console.log('normal mounted')
  },
})

export default handle

export {
  normal
}