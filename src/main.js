import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import api from './api'
import './assets/styles/reset.css'
import '@/icons'


Vue.config.productionTip = false

Vue.prototype.$api = api


// 检测当前点击是否是当前元素的自定义指令
Vue.directive('clickoutside', {
  bind (el, binding, vnode) {
    function documentHandler (e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  update () { },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
