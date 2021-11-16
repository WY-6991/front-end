import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ()=>import('@/views/Index.vue'),
    redirect:'/home',
    children:[
      {
        path:'home',
        component:()=>import('@/views/Home.vue')
      },
      {
        path:'about',
        component:()=>import('@/views/About.vue')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
