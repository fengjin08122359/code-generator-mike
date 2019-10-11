<template>
  <el-input class="elinput" v-model="rawData.text" 
    :placeholder="rawData.placeholder" 
    :disabled="rawData.disabled" 
    :size="rawData.size.value" 
    :type="rawData.type" 
    :resize="rawData.resize.value" 
    :autofocus='rawData.autofocus'>
    <template slot="prepend" ><span v-if="rawData.prepend != ''" v-html='rawData.prepend'></span></template>
    <template slot="append" ><span v-if="rawData.append != ''" v-html='rawData.append'></span></template>
  </el-input>
</template>

<script>
import handle, { elinput } from "./index";
export default {
  name: 'Elinput',
  data() {
    return {
      elinput: elinput,
      raw: {
        text:'',
        placeholder: 'input',
        disabled: false,
        size: {
          value: '',
          options: ['', 'medium', 'small', 'mini'],
          type: "array"
        },
        type: '',
        resize:  {
          value: '',
          options: ['', 'none', 'both', 'horizontal', 'vertical'],
          type: "array"
        },
        autofocus: false,
        append:'',
        prepend:'',
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
