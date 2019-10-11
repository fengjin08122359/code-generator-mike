<template>
  <el-switch
    v-model="rawData.value"
    :active-color="rawData.activeColor.value"
    :inactive-color="rawData.inactiveColor.value"
    :active-text="rawData.activeText"
    :inactive-text="rawData.inactiveText"
    :disabled="rawData.disabled">
  </el-switch>
</template>

<script>
import handle, { elswitch } from "./index";
export default {
  name: 'Elswitch',
  data() {
    return {
      elswitch: elswitch,
      raw: {
        value:'',
        activeColor: {
          value: '',
          type: 'color'
        },
        inactiveColor: {
          value: '',
          type: 'color'
        },
        activeText: 'active',
        inactiveText: 'inactive',
        disabled: false
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
