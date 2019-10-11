<template>
  <div class="route">
    <BackCol/>
    <el-input v-model='name'>
      <template slot='prepend'>
        路由名称
      </template>
    </el-input>
    <el-input v-model='alias'>
      <template slot='prepend'>
        路由简称
      </template>
    </el-input>
    <el-input v-model='path'>
      <template slot='prepend'>
        路由地址
      </template>
      <template slot='append'>
        <el-button @click="add">新增路由</el-button>
      </template>
    </el-input>
    <el-row>
      <el-col :span="4">
        <el-button @click="exportZip()">导出路由</el-button>
      </el-col>
      <el-col :span="20"> 
        <el-switch v-model="needPage" active-text="页面全部导出" inactive-text="仅导出路由">
       </el-switch>
      </el-col>
    </el-row>
    路由列表:
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in route.list" :key="index">
        <template slot="title">
          路由名称: {{item.name}}
          <el-button-group style='margin-left: 20px;'>
            <el-button @click="del(item)">删除路由</el-button>
            <el-button @click="basic(item)">修改模板</el-button>
          </el-button-group>
        </template>
        <el-input v-model='item.name'>
          <template slot='prepend'>
            路由名称
          </template>
        </el-input>
        <el-input v-model='item.alias'>
          <template slot='prepend'>
            路由简称
          </template>
        </el-input>
        <el-input v-model='item.path'>
          <template slot='prepend'>
            路由地址
          </template>
          <template slot='append'>
            <el-button @click="edit(item)">修改路由</el-button>
          </template>
        </el-input>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import handle, {
    route
  } from "./index";
  export default {
    name: 'Route',
    data() {
      return {
        route: route,
        name: '',
        path: '',
        alias: '',
        needPage: false
      }
    },
    created() {
      handle.created()
    },
    mounted() {
      handle.mounted()
    },
    activated() {
      handle.switchRoute(this.$route.params.pk)
    },
    methods: {
      add() {
        if (this.name && this.path && this.path.startsWith('/')) {
          handle.addRouter(this.name, this.path, this.alias)
        } else {
          alert('路由信息填写错误,路由需要/开头')
        }
      },
      edit(item) {
        if (item.name && item.path && item.path.startsWith('/')) {
          handle.edit(item)
        } else {
          alert('路由信息填写错误,路由需要/开头')
        }
      },
      del(item) {
        handle.del(item);
      },
      exportZip() {
        handle.exportZip(this.needPage ? 1 : 0);
      },
      basic(item) {
        this.$router.push({
          name: 'Basic',
          params: {
            id: item.id
          }
        })
      }

    },
  }
</script>

<style>

</style>