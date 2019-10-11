import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('../pages/Main.vue')
const Route = () => import('../pages/route/Route.vue')
const Project = () => import('../pages/project/Project.vue')
const Basic = () => import('../pages/basic/Basic.vue')
const Arrange = () => import('../pages/arrange/Arrange.vue')
const CompsList = () => import('../pages/compsList/CompsList.vue')
const ImgManage = () => import('../pages/imgManage/ImgManage.vue')
const Postman = () => import('../pages/postman/Postman.vue')

Vue.use(Router);

var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Route/:pk',
      name: 'Route',
      component: Route
    },
    {
      path: '/Basic/:id',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/Arrange/:id',
      name: 'Arrange',
      component: Arrange
    },
    {
      path: '/CompsList',
      name: 'CompsList',
      component: CompsList
    },
    {
      path: '/ImgManage',
      name: 'ImgManage',
      component: ImgManage
    },
    {
      path: '/Postman/:id',
      name: 'Postman',
      component: Postman
    }
  ],
})

router.beforeEach((to, from, next)=>{
  next()
})

export default router