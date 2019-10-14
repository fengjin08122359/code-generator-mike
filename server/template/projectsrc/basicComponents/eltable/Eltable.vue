<template>
  <el-table class="eltable"
    :data="rawData.table.data"
    stripe
    style="width: 100%">
    <el-table-column v-for="(item, index) in rawData.table.col" :key="index" :prop="item.prop" :label="item.label" :width='item.width'>
    </el-table-column>
  </el-table>
</template>

<script>
import handle, { eltable } from "./index";
export default {
  name: 'Eltable',
  data() {
    return {
      eltable: eltable,
      raw: {
        table: {
          data: [{
            date: '2016-05-02',
            name: '王小虎'
          }],
          col:[{
            prop: 'date',
            label: '日期',
            width: 120
          },{
            prop: 'name',
            label: '姓名',
            width: 120
          }],
          type: 'table'
        }
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
