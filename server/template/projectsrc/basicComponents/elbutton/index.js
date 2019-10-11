import {Handle, DataHandle} from 'nclient-microfront';

class Elbutton extends DataHandle{
  constructor() {
    super('elbuttonComp')
    
  }
  init () {
    console.log('Elbutton init')
  }
}

let elbutton = new Elbutton()

let handle = new Handle({
  name: 'elbuttonComp',
  created () {
    elbutton.init()
    console.log('elbutton created')
  },
  mounted () {
    console.log('elbutton mounted')
  },
})

export default handle

export {
  elbutton
}