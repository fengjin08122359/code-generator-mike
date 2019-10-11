import {Handle, DataHandle} from 'nclient-microfront';

class Editor extends DataHandle{
  constructor() {
    super('editorComp')
    
  }
  init () {
    console.log('Editor init')
  }
}

let editor = new Editor()

let handle = new Handle({
  name: 'editorComp',
  created () {
    editor.init()
    console.log('editor created')
  },
  mounted () {
    console.log('editor mounted')
  },
})

export default handle

export {
  editor
}