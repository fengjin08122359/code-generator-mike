<script>
import CoverEl from './coverEl/CoverEl'
import handle, {components} from '@/sdk/components'
import EditorEl from './EditorEl'
let {entries} = Object

export default {
  name: 'editor-el',
  data() {
    return {
      components: components
    }
  },
  props: ['elem', 'isChild'],
  render: function (createElement) {
    let elementO =  this.elem

    const data = {
      'style': elementO.style,
      'attrs': {
        id: elementO.id,
      },
    }

    let children = []
    if (elementO.children) {
      for(let child of elementO.children ){
        children.push(createElement(EditorEl,{'props': {elem: child,isChild: true}}, []))
        // children.push(createElement(child.type,{'props': {rawData: child.raw}}, child.children))
      }
    }

    let stageElem
    if (this.isChild) {
      stageElem = createElement(elementO.type, {
        ...data,
        'props': {rawData: elementO.raw},
      }, children)
    } else {
      stageElem = createElement(CoverEl, {
        ...data,
        class: {active: this.isActive},
        'on': { activated: this.activatedHandler }
      }, [ createElement(elementO.type, {
        'props': {rawData: elementO.raw},
      }, children) ])
    }
    return stageElem
  },
  computed: {
    isActive () {
      return (this.components.active.findIndex(el => el.id === this.elem.id) !== -1)
    },
    rawData () {
      return this.elem ? this.elem.raw : {}
    }
  },
  methods: {
    activatedHandler (e) {
      handle.setActive(this.elem)
      e.stopPropagation()
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
</style>