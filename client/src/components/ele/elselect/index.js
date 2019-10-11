import {Handle, DataHandle} from 'nclient-microfront';

class Elselect extends DataHandle{
  constructor() {
    super('elselectComp')
    
  }
  init () {
    console.log('Elselect init')
  }
}

let elselect = new Elselect()

let handle = new Handle({
  name: 'elselectComp',
  created () {
    elselect.init()
    console.log('elselect created')
  },
  mounted () {
    console.log('elselect mounted')
  },
})

export default handle

export {
  elselect
}