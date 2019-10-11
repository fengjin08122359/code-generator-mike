import {Handle, DataHandle} from 'nclient-microfront';

let {entries} = Object

class RawControl extends DataHandle{
  constructor() {
    super('rawControlComp')
    
  }
  init () {
    console.log('RawControl init')
  }
}

let rawControl = new RawControl()

let handle = new Handle({
  name: 'rawControlComp',
  created () {
    rawControl.init()
    console.log('rawControl created')
  },
  mounted () {
    console.log('rawControl mounted')
  },
  getData (val) {
    var result = []
    for(let [key, value] of entries(val) ){
      if (value instanceof Array) {
        var add = { value: '', type: 'string'}
        var valueArray = value.reduce((total,item) => {
          if (typeof item == 'string' ) {
            total.push({
              value: item,
              type: 'string'
            })
            add = {
              value: '',
              type: 'string'
            }
          } else if (typeof item == 'number' ) {
            total.push({
              value: item,
              type: 'number'
            })
            add = {
              value: '',
              type: 'number'
            }
          } else if (typeof item == 'boolean' ) {
            total.push({
              value: item,
              type: 'boolean'
            })
            add = {
              value: '',
              type: 'boolean'
            }
          } else if (item instanceof Object) {
            total.push({
              value: item.value,
              name: item.name,
              type: 'object'
            })
            add = {
              value: '',
              name: '',
              type: 'object'
            }
          }
          return total
        },[])
        result.push({
          name: key,
          value: valueArray,
          type: 'array',
          addObj: add,
          add:function () {
            this.value.push(this.addObj)
          },
          del:function (index) {
            this.value.splice(index, 1)
          }
        })
      } else if (typeof value == 'string' ) {
        result.push({
          name: key,
          value: value,
          type: 'string'
        })
      } else if (typeof value == 'number' ) {
        result.push({
          name: key,
          value: value,
          type: 'number'
        })
      } else if (typeof value == 'boolean' ) {
        result.push({
          name: key,
          value: value,
          type: 'boolean' 
        })
      } else if (value instanceof Object ) {
        if (value.type == 'array') {
          result.push({
            name: key,
            value: JSON.parse(JSON.stringify(value)),
            type: 'object',
            valueType: 'array'
          })
        } else if (value.type == 'color') {
          result.push({
            name: key,
            value: JSON.parse(JSON.stringify(value)),
            type: 'object',
            valueType: 'color'
          })
        } else if (value.type == 'image') {
          result.push({
            name: key,
            value: JSON.parse(JSON.stringify(value)),
            type: 'object',
            valueType: 'image'
          })
        } else if (value.type == 'table') {
          result.push({
            name: key,
            value: JSON.parse(JSON.stringify(value)),
            type: 'object',
            valueType: 'table',
            addObj: {
              prop: 'prop',
              label: 'label',
              width: '120',
            },
            addCol:function () {
              this.value.col.push(this.addObj)
            },
            delCol:function (index) {
              this.value.col.splice(index, 1)
            },
            addData:function () {
              var addObj = {}
              this.value.col.forEach((item) => {
                addObj[item.prop] = item.label
              })
              this.value.data.push(addObj)
            },
            delData:function (index) {
              this.value.data.splice(index, 1)
            }
          })
        }
      }
    }
    return result
  },
  getRaw (val) {
    return val.reduce((total, item) => {
      if (item.type == 'array') {
        item.value = item.value.reduce((ivt,ivi) => {
          if (ivi.type == 'object') {
            ivt.push({
              name: ivi.name,
              value: ivi.value,
            })
          } else {
            ivt.push(ivi.value)
          }
          return ivt
        }, [])
      }
      total[item.name] = item.value
      return total
    },{})
  }
})

export default handle

export {
  rawControl
}