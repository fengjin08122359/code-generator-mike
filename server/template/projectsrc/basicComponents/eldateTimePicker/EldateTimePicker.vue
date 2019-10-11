<template>
  <el-date-picker 
    v-model="rawData.text" 
    :placeholder="rawData.placeholder" 
    :disabled="rawData.disabled" 
    :type="rawData.type.value">
  </el-date-picker>
</template>

<script>
import handle, { eldateTimePicker } from "./index";
export default {
  name: 'EldateTimePicker',
  data() {
    return {
      eldateTimePicker: eldateTimePicker,
      raw: {
        text: '',
        type: {
          val: 'date',
          options: ['year', 'month', 'date', 'week', 'datetime', 'datetimerange', 'daterange'],
          type: "array"
        },
        placeholder: '',
        disabled:false,
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
