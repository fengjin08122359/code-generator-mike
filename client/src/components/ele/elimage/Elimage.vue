<template>
  <el-image :src="rawData.url.value"  :fit="rawData.fit.value" :lazy="rawData.lazy"></el-image>
</template>

<script>
import handle, { elimage } from "./index";
export default {
  name: 'Elimage',
  data() {
    return {
      elimage: elimage,
      raw: {
        url: {
          value: '',
          type: 'image'
        },
        fit: {
          value: '',
          options:['', 'fill', 'contain', 'cover', 'none', 'scale-down'],
          type: "array"
        },
        lazy: false
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
