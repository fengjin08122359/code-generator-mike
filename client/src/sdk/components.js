import {
  Handle,
  DataHandle,
  rgHandle,
  httplink
} from 'nclient-microfront';
import uuidv1 from 'uuid/v1';

new Handle({
  name: 'compList',
  add(name, raw, style = {}) {
    this[name] = {
      raw,
      style
    }
  }
})


class Component extends DataHandle {
  constructor(props) {
    var id = props.id || ("comp" + uuidv1())
    super('componentClass', id)
    this.id = id
    this.el = null
    this.props = null
    // this.children = []
    this.style = {
      wordBreak: 'break-all',
      "box-sizing": "border-box",
      "border-left-color": "#000",
      "border-left-style": "solid",
      "border-left-width": 0,
      "border-right-color": "#000",
      "border-right-style": "solid",
      "border-right-width": 0,
      "border-top-color": "#000",
      "border-top-style": "solid",
      "border-top-width": 0,
      "border-bottom-color": "#000",
      "border-bottom-style": "solid",
      "border-bottom-width": 0,
      "border-top-left-radius": "0px",
      "border-top-right-radius": "0px",
      "border-bottom-left-radius": "0px",
      "border-bottom-right-radius": "0px"
    }
    this.target = null
    this.raw = {}
    this.stylePure = {}
    this.children = []
    this.childrenName = ''
    this.merge(props)
    // this.getChildFromServer()
    // el.target.appendChild(this.target.$el);
  }
  init() {
    console.log('Component init')
  }
  merge(props) {
    this.props = {
      ...this.props,
      ...props.props
    }
    this.style = {
      ...this.style,
      ...props.style
    }
    this.children = props.children || [];
    this.childrenName = props.childrenName || '';
    this.type = props.type
    this.target = null
    if (this.type) {
      this.style = {
        ...rgHandle.compList[this.type].style,
        ...this.style
      }
      this.raw = {
        ...rgHandle.compList[this.type].raw,
        ...this.raw,
        ...props.raw
      }
    }
    this.genStyle();
  }
  genStyle() {
    this.style = {
      ...this.style,
      zIndex: this.style.zIndex,
      minWidth: this.style.minWidth,
      minHeight: this.style.minHeight,
      top: (typeof this.style.top === 'number') ? (this.style.top + 'px') : this.style.top,
      left: (typeof this.style.left === 'number') ? (this.style.left + 'px') : this.style.left,
      bottom: (typeof this.style.bottom === 'number') ? (this.style.bottom + 'px') : this.style.bottom,
      right: (typeof this.style.right === 'number') ? (this.style.right + 'px') : this.style.right,
      width: (typeof this.style.width === 'number') ? (this.style.width + 'px') : this.style.width,
      height: (typeof this.style.height === 'number') ? (this.style.height + 'px') : this.style.height
    }

    this.stylePure.top = this.useParseInt(this.style.top)
    this.stylePure.left = this.useParseInt(this.style.left)
    this.stylePure.bottom = this.useParseInt(this.style.bottom)
    this.stylePure.right = this.useParseInt(this.style.right)
    this.stylePure.bottom = this.useParseInt(this.style.bottom)
    this.stylePure.width = this.useParseInt(this.style.width)
    this.stylePure.height = this.useParseInt(this.style.height)
  }
  useParseInt(val) {
    return (val && (val.indexOf('px') > -1 || val.indexOf('rem') > -1)) ? parseInt(val) : null
  }
  saveChildren(name) {
    this.childrenName = name || '';
    this.getChildFromServer()
  }
  getChildFromServer() {
    if (this.childrenName) {
      this.children = [];
      httplink('getArrange', `/components/getArrange`, {
          id: this.childrenName
        }, 'post')
        .then(result => {
          this.children = components.resetToComponents(JSON.parse(result.res.list))
        })
    }
  }
  saveStyle(val) {
    this.style = {
      ...this.style,
      ...val
    }
    this.genStyle();
  }
  saveRaw(raw) {
    this.raw = {
      ...this.raw,
      ...raw
    }
  }
  move(x, y) {
    var left = this.stylePure.left + x
    var top = this.stylePure.top + y
    this.style = {
      ...this.style,
      left: left,
      top: top,
      position: 'absolute'
    }
    this.genStyle();
  }
}

class Components extends DataHandle {
  constructor() {
    super('componentsClass')
    this.list = []
    this.active = []
    document.addEventListener("keydown", (event) => {
      if (event.keyCode == 46 && this.active.length > 0) {
        this.deleteActive()
      }
    }, false);

  }
  init() {
    console.log('Components init')
  }
  register(props) {
    var comp = null
    if (this.list.filter(item => item.id == props.id).length == 0) {
      comp = new Component(props);
      this.list.push(comp);
    } else {
      comp = this.list.filter(item => item.id == props.id)[0]
      comp.merge(props)
    }
    console.log(comp);
    return comp
  }
  deleteActive() {
    var lastActive = this.active[0]
    this.active = []
    if (lastActive) {
      this.list = this.list.filter(item => item.id != lastActive.id)
    }
  }
  setList(data) {
    this.list = [];
    data.forEach(item => {
      this.list.push(new Component(item))
    })
  }
  getSaveableList() {
    return this.getSaveable(this.list)
  }
  getSaveable(data) {
    return data.map(item => {
      var target = {}
      target.id = item.id || ("comp" + uuidv1())
      target.props = item.props
      target.style = item.style
      target.type = item.type
      target.raw = item.raw
      target.childrenName = item.childrenName
      target.children = this.getSaveable(item.children)
      return target
    })
  }
  resetToComponents(data) {
    return data.map(item => {
      return new Component(item)
    })
  }
}

let components = new Components()

let handle = new Handle({
  name: 'componentsClass',
  created() {
    components.init()
    console.log('components created')
  },
  mounted() {
    console.log('components mounted')
  },
  setActive(item) {
    components.active = [item]
  }
})

export default handle

export {
  components
}