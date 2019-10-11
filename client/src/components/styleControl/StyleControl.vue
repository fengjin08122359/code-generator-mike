<template>
  <div class="styleControl">
    <el-row>
      <el-collapse accordion v-show="active">
        <el-collapse-item title="basic css">
          <el-input v-model="style.height"><template slot='prepend'>height</template></el-input>
          <el-input v-model="style.width"><template slot='prepend'>width</template></el-input>
          <el-input v-model="style.left"><template slot='prepend'>left</template></el-input>
          <el-input v-model="style.right"><template slot='prepend'>right</template></el-input>
          <el-input v-model="style.top"><template slot='prepend'>top</template></el-input>
          <el-input v-model="style.bottom"><template slot='prepend'>bottom</template></el-input>
          <el-input v-model="style.zIndex"><template slot='prepend'>zIndex</template></el-input>
          <el-select v-model="style.display" placeholder="display">
            <template slot='prefix'>display</template>
            <el-option
              v-for="item in displayoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="style.position" placeholder="position">
            <template slot='prefix'>position</template>
            <el-option
              v-for="item in positionoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="style.overflowX" placeholder="position">
            <template slot='prefix'>overflow-x</template>
            <el-option
              v-for="item in overflowoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="style.overflowY" placeholder="position">
            <template slot='prefix'>overflow-y</template>
            <el-option
              v-for="item in overflowoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="style.boxSizing" placeholder="position">
            <template slot='prefix'>box-sizing</template>
            <el-option
              v-for="item in boxSizingoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="style.verticalAlign" placeholder="position">
            <template slot='prefix'>vertical-align</template>
            <el-option
              v-for="item in verticalAlignoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="style.textAlign" placeholder="position">
            <template slot='prefix'>text-align</template>
            <el-option
              v-for="item in textAlignoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-col>backgroundColor: <el-color-picker v-model="style.backgroundColor"></el-color-picker></el-col>
          
        </el-collapse-item>
        <el-collapse-item title="font">
          <el-col>color: <el-color-picker v-model="style.color"></el-color-picker></el-col>
          <el-input v-model="style.lineHeight"><template slot='prepend'>lineHeight</template></el-input>
          <el-input v-model="style.fontSize"><template slot='prepend'>fontSize</template></el-input>
          <el-input v-model="style.fontWeight"><template slot='prepend'>fontWeight</template></el-input>
          <el-col v-for="(item, index) in directionoptions" :key="`margin${index}`">
            <el-input v-model="style[`margin-${item.label}`]"><template slot='prepend'>margin-{{item.label}}:</template></el-input>
          </el-col>
          <el-col v-for="(item, index) in directionoptions" :key="`padding${index}`">
            <el-input v-model="style[`padding-${item.label}`]"><template slot='prepend'>padding-{{item.label}}:</template></el-input>
          </el-col>

          
        </el-collapse-item>
        <el-collapse-item title="Border">
          <el-col v-for="(item, index) in border" :key="`border${index}`">
            border-{{item.name}}
            <el-input v-model="item.width"><template slot='prepend'>width:</template></el-input>
            <el-col>color: <el-color-picker v-model="item.color"></el-color-picker></el-col>
            <el-select v-model="item.style" placeholder="position">
              <template slot='prefix'>style:</template>
              <el-option
                v-for="item in borderStyleOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col v-for="(item, index) in borderRadius" :key="`borderRadius${index}`">
            border-{{item.name}}-radius:
            <el-input v-model="item.value"><template slot='prepend'></template></el-input>
          </el-col>
        </el-collapse-item>
        <el-collapse-item title="raw" v-show='JSON.stringify(rawData)!="{}"'>
          <RawControl :target="active"></RawControl>
        </el-collapse-item>
      </el-collapse>
    </el-row>
  </div>
</template>

<script>
import RawControl from '@/components/rawControl/RawControl'
import {components} from '@/sdk/components'
import handle, { styleControl } from "./index";
export default {
  name: 'StyleControl',
  data() {
    return {
      styleControl: styleControl,
      components: components,
      displayoptions: [{
        value: 'inline-block',
        label: 'inline-block'
      },{
        value: 'inline',
        label: 'inline'
      },{
        value: 'block',
        label: 'block'
      },{
        value: 'initial',
        label: 'initial'
      }],
      textAlignoptions: [{
        value: 'left',
        label: 'left'
      },{
        value: 'right',
        label: 'right'
      },{
        value: 'center',
        label: 'center'
      },{
        value: 'unset',
        label: 'unset'
      }],
      positionoptions: [{
        value: 'relative',
        label: 'relative'
      },{
        value: 'absolute',
        label: 'absolute'
      },{
        value: 'static',
        label: 'static'
      }],
      overflowoptions: [{
        value: 'auto',
        label: 'auto'
      },{
        value: 'hidden',
        label: 'hidden'
      },{
        value: 'initial',
        label: 'initial'
      },{
        value: 'visible',
        label: 'visible'
      }],
      boxSizingoptions: [{
        value: 'content-box',
        label: 'content-box'
      },{
        value: 'border-box',
        label: 'border-box'
      }],
      directionoptions: [{
        value: 'left',
        label: 'left'
      },{
        value: 'right',
        label: 'right'
      },{
        value: 'top',
        label: 'top'
      },{
        value: 'bottom',
        label: 'bottom'
      }],
      verticalAlignoptions: [{
        value: 'baseline',
        label: 'baseline'
      },{
        value: 'bottom',
        label: 'bottom'
      },{
        value: 'initial',
        label: 'initial'
      },{
        value: 'middle',
        label: 'middle'
      },{
        value: 'sub',
        label: 'sub'
      },{
        value: 'text-bottom',
        label: 'text-bottom'
      },{
        value: 'text-top',
        label: 'text-top'
      },{
        value: 'top',
        label: 'top'
      },{
        value: 'unset',
        label: 'unset'
      }],
      border:  [{
        name: 'left',
        width: "0",
        color: '#000',
        style: 'solid'
      },{
        name: 'right',
        width: "0",
        color: '#000',
        style: 'solid'
      },{
        name: 'top',
        width: "0",
        color: '#000',
        style: 'solid'
      },{
        name: 'bottom',
        width: "0",
        color: '#000',
        style: 'solid'
      }],
      borderStyleOptions: [{
        name: 'none',
        value: 'none'
      },{
        name: 'dotted',
        value: 'dotted'
      },{
        name: 'dashed',
        value: 'dashed'
      },{
        name: 'solid',
        value: 'solid'
      },{
        name: 'double',
        value: 'double'
      },{
        name: 'groove',
        value: 'groove'
      },{
        name: 'ridge',
        value: 'ridge'
      },{
        name: 'inset',
        value: 'inset'
      },{
        name: 'outset',
        value: 'outset'
      },{
        name: 'inherit',
        value: 'inherit'
      }],
      borderRadius: [{
        name: 'top-left',
        value: '0px'
      },{
        name: 'top-right',
        value: '0px'
      },{
        name: 'bottom-left',
        value: '0px'
      },{
        name: 'bottom-right',
        value: '0px'
      },],
    }
  },
  computed: {
    active () {
      return this.components.active[0] || null
    },
    style () {
      return this.active ? this.active.style : {}
    },
    rawData () {
      return this.active ? this.active.raw : {}
    },
    borderStyle()  {
      return {
        ...this.border.reduce((total,item) => {
          total[`border-${item.name}-width`] = `${item.width}`
          total[`border-${item.name}-color`] = `${item.color}`
          total[`border-${item.name}-style`] = `${item.style}`
          return total
        }, {}),
        ...this.borderRadius.reduce((total,item) => {
          total[`border-${item.name}-radius`] = `${item.value}`
          return total
        }, {}),
      }
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    borderChange () {
      if (this.components.active[0]) {
        this.components.active[0].saveStyle(this.borderStyle)
      }
    },
    deleteActive () {
      this.components.deleteActive()
    }
  },
  watch: {
    borderStyle (val) {
      this.borderChange()
    },
    active (val) {
      if (val) {
        this.border = [{
          name: 'left',
          width: val.style['border-left-width'] || 0,
          color: val.style['border-left-color'] || '#000',
          style: val.style['border-left-style'] || 'solid'
        },{
          name: 'right',
          width: val.style['border-right-width'] || 0,
          color: val.style['border-right-color'] || '#000',
          style: val.style['border-right-style'] || 'solid'
        },{
          name: 'top',
          width: val.style['border-top-width'] || 0,
          color: val.style['border-top-color'] || '#000',
          style: val.style['border-top-style'] || 'solid'
        },{
          name: 'bottom',
          width: val.style['border-bottom-width'] || 0,
          color: val.style['border-bottom-color'] || '#000',
          style: val.style['border-bottom-style'] || 'solid'
        }]
      }
    }
  },
  components: {
    RawControl
  }
}
</script>

<style>
.styleControl{
  position: relative;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow: auto
}
</style>
