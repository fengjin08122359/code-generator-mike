import {Handle, DataHandle} from 'nclient-microfront';

class Nlabel extends DataHandle{
  constructor() {
    super('nlabelComp')
    
  }
  init () {
    console.log('Nlabel init')
  }
}

let nlabel = new Nlabel()

let handle = new Handle({
  name: 'nlabelComp',
  created () {
    nlabel.init()
    console.log('nlabel created')
  },
  mounted () {
    console.log('nlabel mounted')
  },
})

export default handle

export {
  nlabel
}