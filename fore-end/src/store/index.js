import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).id,
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username,
      password: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).password,
      state: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).state,
      name: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
      postbox: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).postbox,
      phone: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).phone,
      hotel_id: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).hotel_id
    },
    search: {
      id: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).id,
      location: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).location,
      startdate: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).startdate,
      enddate: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).enddate,
      adult: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).adult,
      child: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).child,
      room_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).room_num,
      distance: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).distance,
      distance_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).distance_num,
      select_distance_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).select_distance_num,
      select_score_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).select_score_num,
      select_star_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).select_star_num,
      select_hotelFacList: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).select_hotelFacList,
      select_roomFacList: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).select_roomFacList,
      break_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).break_num,
      select_break_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).select_break_num,
      cancle_policy_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).cancle_policy_num,
      select_policy_num: window.localStorage.getItem('search' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('search' || '[]')).select_policy_num
    },
    order: {
      id: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).id,
      hotel_name: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).hotel_name,
      hotelid: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).hotelid,
      money: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).money,
      num: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).num,
      room_name: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).room_name,
      roomid: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).roomid,
      startdate: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).startdate,
      enddate: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).enddate,
      state: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).state,
      username: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).username,
      userid: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).userid,
      date_num: window.localStorage.getItem('order' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('order' || '[]')).date_num
    },
    hotel: {
      id: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).id,
      name: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).name,
      desciption: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).desciption,
      distance: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).distance,
      city: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).city,
      location: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).location,
      address: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).address,
      score: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).score,
      star: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).star,
      img: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).img,
      imgList: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).imgList,
      rooms: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).rooms,
      facilities: window.localStorage.getItem('hotel' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('hotel' || '[]')).facilities,
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    search(state,search){
      state.search=search
      window.localStorage.setItem('search', JSON.stringify(search))
    },
    firstsearchclear(state){
      state.search.id=null
      state.search.distance=null
      state.search.distance_num=[]
      state.search.select_distance_num=[]
      state.search.select_score_num=[]
      state.search.select_star_num=[]
      state.search.select_hotelFacList=[]
      state.search.select_roomFacList=[]
      state.search.break_num=[]
      state.search.select_break_num=[]
      state.search.cancle_policy_num=[]
      state.search.select_policy_num=[]
    },
    order(state,order){
      state.order=order
      window.localStorage.setItem('order', JSON.stringify(order))
    },
    hotel(state,hotel){
      state.hotel=hotel
      window.localStorage.setItem('hotel', JSON.stringify(hotel))
    }
  }
})
