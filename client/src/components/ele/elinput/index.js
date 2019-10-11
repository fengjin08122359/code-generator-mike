import {Handle, DataHandle} from 'nclient-microfront';

class Elinput extends DataHandle{
  constructor() {
    super('elinputComp')
    
  }
  init () {
    console.log('Elinput init')
  }
}

let elinput = new Elinput()

let handle = new Handle({
  name: 'elinputComp',
  created () {
    elinput.init()
    console.log('elinput created')
  },
  mounted () {
    console.log('elinput mounted')
  },
})

export default handle

export {
  elinput
}