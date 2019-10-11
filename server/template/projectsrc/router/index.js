import Vue from 'vue'
import Router from 'vue-router'
/* router config start */
/* router config end */


Vue.use(Router);

var router =  new Router({
  routes: routes
})

router.beforeEach((to, from, next)=>{
  next()
})

export default router