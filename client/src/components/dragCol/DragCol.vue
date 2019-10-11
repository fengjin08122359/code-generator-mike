<template>
  <div class="dragCol" draggable="true"
        @dragstart="e => dragstartHandler(e, item)"
        @click="e => addItemToStage(e, item)">{{item.name || item.type}}
  </div>
</template>

<script>
import { components } from "@/sdk/components";
import handle, { dragCol } from "./index";
export default {
  name: 'DragCol',
  data() {
    return {
      dragCol: dragCol
    }
  },
  props: ['item'],
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    addItemToStage (e, item) {
      components.register(item)
    },
    dragstartHandler (e, item) {
      // document.documentElement.classList.add('droppable')
      e.dataTransfer.dropEffect = 'copy'
      e.dataTransfer.effectAllowed = 'all'
      e.dataTransfer.setData('text/plain', JSON.stringify(item))
    },
  },
}
</script>

<style>
.dragCol {
  text-align: center;
  padding: 5px;
  border: 1px solid;
}
</style>
