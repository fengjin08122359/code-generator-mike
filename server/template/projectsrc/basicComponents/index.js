import {Handle, DataHandle, rgHandle} from 'nclient-microfront';
import Vue from 'vue'
import Elbutton from './elbutton/Elbutton'
import Elicon from './elicon/Elicon'
import Elradio from './elradio/Elradio'
import Elcheckbox from './elcheckbox/Elcheckbox'
import Elinput from './elinput/Elinput'
import EldateTimePicker from './eldateTimePicker/EldateTimePicker'
import Elimage from './elimage/Elimage'
import Elselect from './elselect/Elselect'
import Elswitch from './elswitch/Elswitch'
import Eltable from './eltable/Eltable'
function upperCamelCase(str){ 
  var reg = /\b(\w)|\s(\w)/g; 
  return str.replace(reg,function(m){return m.toUpperCase()}) 
}

class Ele extends DataHandle{
  constructor() {
    super('eleComp')
    this.list = [{
      type: 'elbutton', 
      name: 'el-button',
      comps: Elbutton
    },{
      type: 'elicon',
      name: 'el-icon',
      comps: Elicon
    },{
      type: 'elradio',
      name: 'el-radio',
      comps: Elradio
    },{
      type: 'elcheckbox',
      name: 'el-checkbox',
      comps: Elcheckbox
    },{
      type: 'elinput',
      name: 'el-input',
      comps: Elinput
    },{
      type: 'eldateTimePicker',
      name: 'el-dateTimePicker',
      comps: EldateTimePicker
    },{
      type: 'elimage',
      name: 'el-image',
      comps: Elimage
    },{
      type: 'elselect',
      name: 'el-select',
      comps: Elselect
    },{
      type: 'elswitch',
      name: 'el-switch',
      comps: Elswitch
    },{
      type: 'eltable',
      name: 'el-table',
      comps: Eltable
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
    console.log('Ele init')
  }
}

let ele = new Ele()

let handle = new Handle({
  name: 'eleComp',
  created () {
    ele.init()
    console.log('ele created')
  },
  mounted () {
    console.log('ele mounted')
  },
})

export default handle

export {
  ele
}