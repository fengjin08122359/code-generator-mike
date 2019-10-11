<template>
  <div class="nlabel">
    {{rawData.text}}
  </div>
</template>

<script>
import handle, { nlabel } from "./index";
export default {
  name: 'nlabel',
  data() {
    return {
      nlabel: nlabel,
      style: {width: 100, height: 50, "border": "1px solid #000", position: 'relative',display:"inline-block", "box-sizing":"border-box"},
      raw: {
        text: 'label'
      }
    }
  },
  props: ['rawData'],
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
}
</script>

<style>

</style>
