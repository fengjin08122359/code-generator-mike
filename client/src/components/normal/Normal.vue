<template>
  <div class="normal">
    <el-row>
      <el-col v-for="(item, index) in normal.list" :key="'normal'+ index" :span="24">
        <DragCol :item="item" ></DragCol>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DragCol from '@/components/dragCol/DragCol'
import handle, { normal } from "./index";
export default {
  name: 'Normal',
  data() {
    return {
      normal: normal
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  components: {
    ...normal.comps,
    DragCol
  }
}
</script>

<style scoped>

</style>
