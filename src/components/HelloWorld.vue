<template>
  <div>
    <div class="show"
         v-click-outside="closeDialog">
      显示
    </div>
  </div>
</template>
 
<script>
const clickOutside = {
  // 初始化指令
  bind (el, binding, vnode) {
    function clickHandler (e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = clickHandler;
    document.addEventListener('click', clickHandler);
  },
  update () { },
  unbind (el, binding) {
    // 解除事件监听
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};


export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true,
    };
  },
  directives: { clickOutside }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>