import {Handle, DataHandle} from 'nclient-microfront';

class Eltable extends DataHandle{
  constructor() {
    super('eltableComp')
    
  }
  init () {
    console.log('Eltable init')
  }
}

let eltable = new Eltable()

let handle = new Handle({
  name: 'eltableComp',
  created () {
    eltable.init()
    console.log('eltable created')
  },
  mounted () {
    console.log('eltable mounted')
  },
})

export default handle

export {
  eltable
}