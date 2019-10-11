<template>
  <el-radio-group v-model="rawData.value" class="elradio">
    <el-radio v-for="(item, index) in rawData.options" :key="index" :label="item.value">{{item.name}}</el-radio>
  </el-radio-group>
</template>

<script>
import handle, { elradio } from "./index";
export default {
  name: 'Elradio',
  data() {
    return {
      elradio: elradio,
      raw: {
        value: '1',
        options: [{
          name: '1',
          value: '1'
        }],
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
