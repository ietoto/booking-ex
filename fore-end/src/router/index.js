import Vue from 'vue'
import Router from 'vue-router'
import HotelSearch from '@/components/HotelSearch/HotelSearch'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Test from '@/components/Test'
import Register from '@/components/Register'
import User from '@/components/User'
import Myorder from '@/components/myorder'
import Order from '@/components/Order'
import OrderHotel from '@/components/OrderHotel'
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
      path: '/',
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
      path: '/myorder',
      name: 'Myorder',
      component: Myorder
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
    ,},
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/orderhotel',
      name: 'OrderHotel',
      component: OrderHotel
    }
  ]
})
