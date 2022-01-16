import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () => import('../views/Index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/blog/:blogId',
                name: 'Blog',
                component: () => import('../views/Blog.vue'),
                meta: {
                    title: '文章'
                }

            }, {
                path: '/friend',
                name: 'Friend',
                component: () => import('../views/Friend.vue'),
                meta: {
                    title: '文章'
                }

            },
            {
                path: 'moment',
                name: 'Moment',
                component: () => import('../views/Moment.vue'),
                meta: {
                    title: '动态'
                }
            },


            {
                path: 'about',
                name: 'About',
                component: () => import('../views/About.vue'),
                meta: {
                    title: '关于'
                }
            },

        ]
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
            title: '关于'
        }
    },

    {
        path: '*',
        name: 'Error',
        component: () => import('../views/Error.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router
