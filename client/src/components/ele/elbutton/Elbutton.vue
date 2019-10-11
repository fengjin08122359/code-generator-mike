<template>
  <el-button class="elbutton" :type="rawData.type.value"  :plain="rawData.plain">{{rawData.text}}</el-button>
</template>

<script>
import handle, { elbutton } from "./index";
export default {
  name: 'Elbutton',
  data() {
    return {
      elbutton: elbutton,
      raw: {
        text: 'button',
        type: {
          value: '',
          options: ['', 'primary', 'success', 'info', 'warning', 'danger'],
          type: "array"
        },
        plain: false
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
