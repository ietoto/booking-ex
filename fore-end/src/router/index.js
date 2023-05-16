import Vue from 'vue'
import Router from 'vue-router'
import HotelSearch from '@/components/HotelSearch/HotelSearch'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Test from '@/components/Test'
import Register from '@/components/Register'
import User from '@/components/User'
import Hotel_manage from '@/components/manage/Hotel_manage'
import User_manage from '@/components/manage/User_manage'
import Order_manage from '@/components/manage/Order_manage'
import HotelDetail from '@/components/HotelDetail/HotelDetail'
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
      name: 'HotelSearch',
      component: HotelSearch
    },
    {
      path: '/hotel_manage',
      name: 'Hotel_manage',
      component: Hotel_manage
    },
    {
      path: '/user_manage',
      name: 'User_manage',
      component: User_manage
    },
    {
      path: '/order_manage',
      name: 'Order_manage',
      component: Order_manage
    },
    {
      path:'/hoteldetail',
      name:'HotelDetail',
      component:HotelDetail
    }
  ]
})
