<template>
  <div class="rawControl">
    <el-row v-for="(item, index) in raw" :key="index">
      <template v-if='item.type=="string"'>
        <el-input v-model="item.value" @input="save"><template slot='prepend' >{{item.name}}</template></el-input>
      </template>
      <template v-else-if='item.type=="number"'>
        <el-input-number v-model="item.value" @change="save"  :label="item.name"></el-input-number>
      </template>
      <template v-else-if='item.type=="boolean"'>
        <el-checkbox v-model="item.value" @change="save" >{{item.name}}</el-checkbox>
      </template>
      <template v-else-if='item.type=="object"'>
        <template v-if='item.valueType=="array"'>
          <el-select v-model="item.value.value" :placeholder="item.name" @change="save">
            <el-option
              v-for="item in item.value.options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </template>
        <template v-if='item.valueType=="color"'>
          <el-col>{{item.name}}: <el-color-picker v-model="item.value.value" @change="save"></el-color-picker></el-col>
        </template>
        <template v-if='item.valueType=="table"'>
          col: 
          <el-row v-for="(target, tindex) in item.value.col" :key="'tableCol' + tindex">
            <el-input v-model="target.prop" @input="save"><template slot='prepend' >prop</template></el-input>
            <el-input v-model="target.label" @input="save"><template slot='prepend' >label</template></el-input>
            <el-input v-model="target.width" @input="save"><template slot='prepend' >width</template></el-input>
            <el-button v-if='tindex == 0' @click="item.addCol()">add</el-button>
            <el-button v-if='tindex != 0' @click="item.delCol(tindex)">del</el-button>
          </el-row>
          data: 
          <el-row v-for="(dataTarget, dindex) in item.value.data" :key="'tableData' + dindex">
            <div v-for="(target, tindex) in item.value.col" :key="'tableDataCol' + tindex">
              <el-input v-model="dataTarget[target.prop]" @input="save"><template slot='prepend' >{{target.prop}}</template></el-input>
            </div>
            <el-button v-if='dindex == 0' @click="item.addData()">add</el-button>
            <el-button v-if='dindex != 0' @click="item.delData(dindex)">del</el-button>
          </el-row>
        </template>
         <template v-if='item.valueType=="image"'>
          <el-col>
            <el-input disabled v-model="item.value.value" @input="save">
              <template slot='prepend' >{{item.name}}</template>
              <template slot='append' ><Upload v-model="item.value.value" v-on:uploadChange='(val) => { item.value.value = (document.location.protocol + "//" + location.host + val.url);save()}'></Upload></template>
            </el-input>
          </el-col>
        </template>
      </template>
      <template v-else-if='item.type=="array"'>
        {{item.name}}:
        <el-row v-for="(target, tindex) in item.value" :key="'target' + tindex">
          <template v-if='typeof target.name !="undefined"'>
            <el-input v-model="target.name" @input="save"><template slot='prepend' >name</template></el-input>
          </template>
          <el-input v-model="target.value" @input="save"><template slot='prepend' >value</template></el-input>
          <el-button v-if='tindex == 0' @click="item.add()">add</el-button>
          <el-button v-if='tindex != 0' @click="item.del(tindex)">del</el-button>
        </el-row>
      </template>
    </el-row>
  </div>
</template>

<script>
import handle, { rawControl } from "./index";
import Upload from '@/components/upload/Upload'
export default {
  name: 'RawControl',
  data() {
    return {
      rawControl: rawControl,
      raw: []
    }
  },
  props: ['target'],
  computed: {
    rawData () {
      return this.target ? this.target.raw : {}
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    save () {
      this.target.saveRaw(handle.getRaw(this.raw))
    },
    getTargetValues (val) {
      return handle.getData(val)
    },
    add (target) {
      target.push({
        name: '',
        value: ''
      })
      this.save()
    },
    del (target, index) {
      target.splice(index, 1)
      this.save()
    }
  },
  watch: {
    rawData(val) {
      this.raw = handle.getData(val);
    }
  },
  components: {Upload}
}
</script>

<style>

</style>
