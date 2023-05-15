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
      hotel_id: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).hotel_id
    },
    search: {
      id: null,
      location: null,
      startdate: null,
      enddate: null,
      adult: null,
      child: null,
      room_num: null,
      distance: null,
      distance_num: [],
      select_distance_num: [],
      select_score_num: [],
      select_star_num: [],
      select_hotelFacList: [],
      select_roomFacList: [],
      break_num: [],
      select_break_num: [],
      cancle_policy_num: [],
      select_policy_num: []
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    firstsearch(state,search){
      state.search=search
    },
    search(state,search){
      state.search=search
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
    }
  }
})
