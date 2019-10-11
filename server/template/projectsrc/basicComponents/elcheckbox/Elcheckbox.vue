<template>
  <el-checkbox-group class="elcheckbox" v-model="rawData.value">
    <el-checkbox v-for="(item, index) in rawData.options" :key="index" :label="item.value">{{item.name}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import handle, { elcheckbox } from "./index";
export default {
  name: 'Elcheckbox',
  data() {
    return {
      elcheckbox: elcheckbox,
      raw: {
        value: ['1'],
        options: [{
          name: '1',
          value:'1'
        }]
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
