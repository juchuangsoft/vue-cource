/*
 * @Author: your name
 * @Date: 2019-01-09 21:03:43
 * @LastEditTime: 2020-10-12 01:37:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cource\src\router\router.js
 */
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name:'home',
    component: Home
  },
  {
    path: '/about',
    name : 'about',    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children:[
      {
        path:'child',
        component: ()=>import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components:{
      default:()=>import('@/views/child.vue'),
      email:()=>import('@/views/email.vue'),
      tel:()=>import('@/views/tel.vue')
    }
  }
]
