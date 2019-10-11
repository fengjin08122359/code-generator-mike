import {Handle, DataHandle} from 'nclient-microfront';

class Elcheckbox extends DataHandle{
  constructor() {
    super('elcheckboxComp')
    
  }
  init () {
    console.log('Elcheckbox init')
  }
}

let elcheckbox = new Elcheckbox()

let handle = new Handle({
  name: 'elcheckboxComp',
  created () {
    elcheckbox.init()
    console.log('elcheckbox created')
  },
  mounted () {
    console.log('elcheckbox mounted')
  },
})

export default handle

export {
  elcheckbox
}