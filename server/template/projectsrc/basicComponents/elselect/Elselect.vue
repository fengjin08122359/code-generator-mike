<template>
  <el-select :value="selectValue" 
    :placeholder="rawData.placeholder" 
    :disabled="rawData.disabled" 
    :name="rawData.name" 
    :multiple='rawData.multiple'>
    <el-option
      v-for="(item, index) in rawData.options"
      :key="index"
      :label="item.name"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import handle, { elselect } from "./index";
export default {
  name: 'Elselect',
  data() {
    return {
      elselect: elselect,
      raw: {
        value:'1',
        multipleValue: ['1'],
        placeholder: '',
        multiple: false,
        disabled: false,
        options: [{
          name: '1',
          value:'1'
        }]
      }
    }
  },
  props: ['rawData'],
  computed: {
    selectValue () {
      return this.rawData.multiple ? this.rawData.multipleValue : this.rawData.value
    }
  },
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
