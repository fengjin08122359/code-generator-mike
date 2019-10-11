import {Handle, DataHandle} from 'nclient-microfront';

class DragCol extends DataHandle{
  constructor() {
    super('dragColComp')
    
  }
  init () {
    console.log('DragCol init')
  }
}

let dragCol = new DragCol()

let handle = new Handle({
  name: 'dragColComp',
  created () {
    dragCol.init()
    console.log('dragCol created')
  },
  mounted () {
    console.log('dragCol mounted')
  },
})

export default handle

export {
  dragCol
}