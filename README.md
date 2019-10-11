# nclient-code-generator

### 目的:
开发一个可视化的界面,用于非前端开发使用,快捷开发一些简单的页面

### 功能: 
1. 前端响应页面
2. 服务端处理页面
3. 组件开发页面
4. 需要将数据库的数据保存在json文件中支持导入导出
5. 项目->路由->排版->组件->对象   
  
基础类型分为路由,排版,组件

#####路由基础功能分为
1. 路由地址和名称

#####排版基础功能分为
1. 栅格
2. 相对定位
3. 绝对定位 

#####组件基础功能分为
1. text
2. input
3. textareaa
4. time
5. list
6. select
7. mutil select
8. 返回对象需要和组件绑定
9. button
10. 多语言?

###目标:
(x) 项目新建,删除,导出,修改的功能
(x) 项目新建,删除,导出,修改的界面
(x) 路由新建,删除,修改的功能
(x) 路由新建,删除,修改的界面
(x) 排版保存的功能
(x) 拖拽div,栅格系统,定位系统开发的界面
(x) 栅格系统定位系统使用,样式生成
(x) 基础组件定义开发,组件嵌套
( ) 输出组件定义
( ) 组件导出功能包含json和文件生成器

###使用方法:
npm start

###延伸目标
(x) 排版会存在横屏与竖屏的情况
(x) 排版会存在拉伸的情况
(x) 组件开发,element-ui组件,自定义组件,文本组件

工作顺序: 拖拽系统 => 组件(基础) => 组件(element) => 组件(自定义) => 组件排列 => 组件群 => 定位系统 => 样式修改体系

###拖拽系统
(x) 基础系统
(x) 单个组件需要包含style, prop
(x) 在页面中循环遍历,
(x) 对象遍历?
(x) 当个对象的属性调整
(x) width,height,left,top,right,bottom,zIndex
(x) position 默认relative
(x) 拖拽修改位置
(x) 拖拽系统
(x) 组件(基础)
(x) 组件(element)
(x) 样式修改体系
(x) 定位系统
(x) 嵌套
(x) 删除快捷键
( ) 复制快捷键

###代码生成器
#####1.路由生成规则
(x) 根据路由name在pages中生成vue
cd \src\pages
nclient-build component name
(x) 根据路由信息生成router.js
替换文本
/* router config start */
const Home12 = () => import('../pages/home12/Home12.vue');
var routes = [{path: '/',name: 'Home12',component: Home12}];
/* router config end */
#####2.页面生成规则
(x) 根据规则循环遍历,判断children是否存在
(x) 不存在的,在template中生成根据名称获取style和raw传递到对象npm中
(x) 存在的,在components文件夹下新建组件,组件名是childrenName然后继续第一步,假如当前组件已存在则跳过
cd \src\components
nclient-build component name
(x) 将raw和style信息保存在js文件中

2019/09/02 开发工作
(x) 子组件查询
(x) 路由命名
(x) 组件命名
(x) 子组件嵌套修改方式
(x) 复制功能
(x) redis,数据库链接改造

john的需求整理 
( ) ajax请求,成功,失败返回结果
( ) 某插件传入值,经过请求,返回值
( ) 在非组件界面中使用?

2019/09/03 开发工作
(x) 图片上传
( ) 开发思路整理
(x) 清理组件

2019/09/04 开发工作
(x) el-table的数据绑定

postman集成
(x) 根据postman接口开发对接接口,获取相关的数据
(x) 预留接口 接口调试工具?
(x) 接口生成器
(x) 根据json信息推送至服务端
(x) 列表展示部分内容

(x) 删除一个子组件
