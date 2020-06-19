import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isClick: 0,
    sidebar: true,
    nav: [
      { id: '1', title: '主页', link: 'root' },
      { id: '2', title: '笔记', link: 'noteSom' },
      { id: '3', title: '博客', link: 'blogs' },
      { id: '4', title: '杂文', link: 'essay' },
    ],
    list: [
      { id: '1', navId: '2', title: 'noteSom', link: 'noteSom' },
      { id: '2', navId: '3', title: 'blogs', link: 'blogsOne' },
      { id: '3', navId: '3', title: 'blogsTest', link: 'blogTest' },
      { id: '4', navId: '4', title: 'essay', link: 'Iessay' },
      { id: '5', navId: '4', title: 'essayTest', link: 'essayTest' }
    ]
  },

  mutations: {
    alterBlue (state, n) {
      state.isClick = n
    },
    leftDebar (state) {
      return state.sidebar == true ? state.sidebar = false : state.sidebar = true
    },
    elsewhere (state) {
      return state.sidebar = false
    }
  }
})