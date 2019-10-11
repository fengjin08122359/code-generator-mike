<template>
  <Screen :target='target'>
    <div class="editor" ref='editor' id="main"
      :zoom="zoom"
      @drop="dropHandler"
      @dragover="dragoverHandler"
      @mousedown.capture="mouseDownHandler"
    > 
      <editor-el v-for="(item, index) in compList" :key="index" :elem="item"></editor-el>
    </div>
  </Screen>
</template>

<script>
import {rgData,rgHandle} from 'nclient-microfront';
import { components } from "@/sdk/components";
import elementsFromPoint from "@/sdk/util/elementsFromPoint";
import Screen from "./screen/Screen";
import EditorEl from "./EditorEl";
import handle, { editor } from "./index";


function getPoint(obj) { //获取某元素以浏览器左上角为原点的坐标
  var offsetTop = obj.offsetTop; //获取该元素对应父容器的上边距
  var offsetLeft = obj.offsetLeft; //对应父容器的上边距
  //判断是否有父容器，如果存在则累加其边距
  while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
      offsetTop += obj.offsetTop; //叠加父容器的上边距
      offsetLeft += obj.offsetLeft; //叠加父容器的左边距
  }
  return {
    offsetTop,offsetLeft
  }
}

export default {
  name: 'Editor',
  data() {
    return {
      editor: editor,
      components: components,
      zoom: 1,
      initialAbsPos: {x: 0, y: 0},
      initialRelPos: {x: 0, y: 0},
      currentAbsPos: {x: 0, y: 0},
      currentRelPos: {x: 0, y: 0},
      activeMove: null
    }
  },
  props: ['target'],
  computed: {
    compList () {
      return this.components.list
    },
    active () {
      return this.components.active[0] || null
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    dragoverHandler (e) {
      e.preventDefault();
    },
    dropHandler (e) {
      let zoom = rgData.screenComp.zoom;
      let element = JSON.parse(e.dataTransfer.getData('text/plain'))
      
      var comp = components.register(element)

      let mainContainer = document.getElementById('main')

      let height = comp.stylePure &&  comp.stylePure.height || 'auto'
      let width = comp.stylePure &&  comp.stylePure.width || 'auto'
      let { offsetTop, offsetLeft} = getPoint(mainContainer)
      let top = e.pageY + mainContainer.scrollTop - mainContainer.offsetTop - this.$el.offsetTop - offsetTop
      let left = e.pageX + mainContainer.scrollLeft - mainContainer.offsetLeft - this.$el.offsetLeft - offsetLeft
      if (typeof height == 'number') {
        top = top - (height / 2)
      }
      if (typeof height == 'number') {
        left = left - (width / 2)
      }
      top = Math.round(top / zoom)
      left = Math.round(left / zoom)

      // const fixedElement = fixElementToParentBounds({top, left, height, width}, this.page)
      // element = {...element, ...fixedElement}
      comp.saveStyle({position: 'absolute', top, left, height, width})

      e.preventDefault();
    },
    getMouseAbsPoint (e) {
      return {x: e.clientX, y: e.clientY}
    },
    getMouseRelPoint (e) {
      const mainContainer = document.getElementById('main')
      let { offsetTop, offsetLeft} = getPoint(mainContainer)
      const x = e.clientX + mainContainer.scrollLeft - mainContainer.offsetLeft - this.$el.offsetLeft - offsetTop
      const y = e.clientY + mainContainer.scrollTop - mainContainer.offsetTop - this.$el.offsetTop - offsetLeft

      return {x, y}
    },
    mouseDownHandler (e) {
      let isMrs = false
      this.initialAbsPos = this.currentAbsPos = this.getMouseAbsPoint(e)
      this.initialRelPos = this.currentRelPos = this.getMouseRelPoint(e)
      var el = elementsFromPoint(e.clientX,e.clientY)
      
      if (el[0].id == 'main') {
        this.components.active = []
        return
      } 
      this.activeMove = this.active
      if (this.active) {
        isMrs = true
        // this.$emit('movestart')
        if (e.ctrlKey) {
          var comp = components.register({
            style: this.active.style,
            raw: this.active.raw,
            type: this.active.type,
            childrenName: this.active.childrenName,
            children: this.active.children,
          })
          comp.saveStyle({top: this.active.stylePure.top + 20, left: this.active.stylePure.left + 20})
          rgHandle.componentsClass.setActive(comp);
          this.activeMove = comp
        }
      }
      if (isMrs) {
        this.$nextTick(() => {
          document.documentElement.addEventListener('mousemove', this.mouseMoveHandler, true)
          document.documentElement.addEventListener('mouseup', this.mouseUpHandler, true)
        })
      }
    },
    mouseMoveHandler (e) {
      let zoom = rgData.screenComp.zoom;
      const lastAbsX = this.currentAbsPos.x
      const lastAbsY = this.currentAbsPos.y

      this.currentAbsPos = this.getMouseAbsPoint(e)
      this.currentRelPos = this.getMouseRelPoint(e)

      let offX = this.currentAbsPos.x - lastAbsX
      let offY = this.currentAbsPos.y - lastAbsY
      if (this.active) {
        if (!e.ctrlKey) {
          this.active.move(offX/zoom, offY/zoom)
        }
      }
    },
    mouseUpHandler (e) {
      document.documentElement.removeEventListener('mousemove', this.mouseMoveHandler, true)
      document.documentElement.removeEventListener('mouseup', this.mouseUpHandler, true)
    },
  },
  components: {
    EditorEl,
    Screen
  }
}
</script>

<style lang='less' scoped>
.editor{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -99999999;
}
</style>
