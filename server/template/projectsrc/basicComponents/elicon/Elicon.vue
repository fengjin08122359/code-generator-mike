<template>
  <i class="elicon" :class='rawData.name? `el-icon-${rawData.name}`: ``'></i>
</template>

<script>
import handle, { elicon } from "./index";
export default {
  name: 'Elicon',
  data() {
    return {
      elicon: elicon,
      style: {width: 16, height: 16, position: 'relative',display:"inline-block"},
      raw: {
        name: 'refresh'
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
