import {Handle, DataHandle} from 'nclient-microfront';

class StyleControl extends DataHandle{
  constructor() {
    super('styleControlComp')
    
  }
  init () {
    console.log('StyleControl init')
  }
}

let styleControl = new StyleControl()

let handle = new Handle({
  name: 'styleControlComp',
  created () {
    styleControl.init()
    console.log('styleControl created')
  },
  mounted () {
    console.log('styleControl mounted')
  },
})

export default handle

export {
  styleControl
}