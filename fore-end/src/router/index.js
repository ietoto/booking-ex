import Vue from 'vue'
import Router from 'vue-router'
import Searchfilter from '@/components/Searchfilter/Searchfilter'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Test from '@/components/Test'
import Register from '@/components/Register'
import User from '@/components/User'
import Home from '@/components/manage/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex,
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/search',
      name: 'Searchfilter',
      component: Searchfilter
    },
    {
      path: '/hotel_manage',
      name: 'Home',
      component: Home
    }
  ]
})
