<template>
  <div id="Main">
    <el-button @click="jumpProject()">项目详情</el-button> 
    <el-button @click="jumpComps()">子组件详情</el-button> 
    <el-button @click="jumpImage()">图片管理</el-button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    jumpProject() {
      this.$router.push({
        name: 'Project',
      })
    },
    jumpComps() {
      this.$router.push({
        name: 'CompsList',
      })
    },
    jumpImage() {
      this.$router.push({
        name: 'ImgManage',
      })
    },
  },
}
</script>

<style>
</style>
