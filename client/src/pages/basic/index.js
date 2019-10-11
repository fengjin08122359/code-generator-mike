import {Handle, DataHandle, rgData, httplink, logger} from 'nclient-microfront';



class Basic extends DataHandle{
  constructor() {
    super('basicComp')
    this.id = ''
    this.alias = ''
  }
  init () {
    console.log('Basic init')
  }
  save () {
    httplink('saveBasic', `/components/saveBasic`, {
      id: this.id,
      alias: this.alias,
      list: JSON.stringify(rgData.componentsClass.getSaveableList())
    }, 'post')
    .then(result => {
    })
  }
  exportZip () {
    httplink('exportZipbasic', `/exportZip/basic`, {
      id: this.id
    }, 'post')
    .then(result => {
      window.open(result.res.src, '_blank')
    })
  }
  exportJSON () {
    logger.saveTextAs(JSON.stringify(rgData.componentsClass.getSaveableList()),  this.id + '.json')
  }
  importJSON (json) {
    rgData.componentsClass.setList(json)
  }
}

let basic = new Basic()

let handle = new Handle({
  name: 'basicComp',
  created () {
    console.log('basic created')
  },
  mounted () {
    basic.init()
    console.log('basic mounted')
  },
  switchRoute (id) {
    basic.id = id;
    httplink('getBasic', `/components/getBasic`, {id}, 'post')
    .then(result => {
      console.log(result)
      if (result.res) {
        basic.alias = result.res.alias;
        if (result.res.list) {
          rgData.componentsClass.setList(JSON.parse(result.res.list))
        } else {
          rgData.componentsClass.setList([])
        }
      }
    })
  },
})

export default handle

export {
  basic
}