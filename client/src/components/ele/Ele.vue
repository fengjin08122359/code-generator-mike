<template>
  <div class="ele">
    <el-row>
      <el-col v-for="(item, index) in ele.list" :key="'ele'+ index" :span="24">
        <DragCol :item="item" ></DragCol>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DragCol from '@/components/dragCol/DragCol'
import handle, { ele } from "./index";
export default {
  name: 'Ele',
  data() {
    return {
      ele: ele
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  components: {
    ...ele.comps,
    DragCol
  }
}
</script>

<style>

</style>
