<template>
  <div class="project">
    <el-input v-model='projectName'>
      <template slot='prepend'>
        项目名称
      </template>
      <template slot='append'>
        <el-button @click="add">新增项目</el-button>
      </template>
    </el-input>
    项目列表: 
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in project.list" :key="index" >
        <template slot="title">
          项目名称: {{item.name}} 
          <el-button-group style='margin-left: 20px;'>
           <el-button  @click="del(item)">删除项目</el-button>
           <el-button  @click="jump(item)">跳转路由</el-button>
           <el-button  @click="postman(item)">postman</el-button>
           <el-button  @click="exportZip(item)">导出项目</el-button>
          </el-button-group>
        </template>
        <el-input v-model='item.name'>
          <template slot='append'>
            <el-button @click="editName(item)">修改项目名</el-button>
          </template>
        </el-input>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import handle, { project } from "./index";
export default {
  name: 'Project',
  data() {
    return {
      project: project,
      projectName: ''
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    add () {
      if (this.projectName) {
        handle.addProject(this.projectName)
      }
    },
    editName (item) {
      handle.editName(item);
    },
    del(item) {
      handle.del(item);
    },
    jump (item) {
      this.$router.push({name: 'Route',params: {pk: item.id}})
    },
    postman (item) {
      this.$router.push({name: 'Postman',params: {id: item.id}})
    },
    exportZip (item) {
       handle.exportZip(item);
    }
  },
}
</script>

<style>

</style>
