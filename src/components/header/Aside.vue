<template lang="pug">
  transition(name='slide-fade')
    aside.sidebar
      nav.nav-links
        div.nav-item(v-for="(item, index) in this.$store.state.nav" :key='item.id')
          router-link.nav-link(:to='{name: item.link, params: {id: item.id}}' 
                                @click.native='navIsBlue(index)'
                               :class='{navLinkBlue: $store.state.isClick == index}') {{item.title}}
      ul.sidebar-links
        li(v-for="(item, index) in list")
          router-link.active(:to='{name: item.link, params: {id: item.navId, navId: item.id }}' 
                              @click.native='liBlue(index)' 
                              :class='{activeBlue: isLiBlue == index}') {{item.title}}  
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'Aside',
  data () {
    return {
      isLiBlue: 0
    }
  },
  methods: {
    navIsBlue (index) {
      this.$store.commit('alterBlue', index)
    },
    liBlue (index) {
      this.isLiBlue = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.slide-fade-enter-active
  transition all 0.3s ease
.slide-fade-leave-active
  transition all 0.3s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter, .slide-fade-leave-to
  transform translateX(10px)
  opacity 0
.sidebar
  font-size 16px
  background-color #fff
  width 16rem
  position fixed
  z-index 10
  margin 0
  top 3.6rem
  left 0
  bottom 0
  box-sizing border-box
  border-right 1px solid #eaecef
  overflow-y auto
  .nav-links
    border-bottom 1px solid #eaecef
    padding 0.5rem 0 0.75rem
    .nav-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
      font-weight 600
    .nav-link:hover
      color #0037ff
    .navLinkBlue
      color #0037ff
  .sidebar-links
    padding 1.5rem 0
    li
      display list-item
      text-align -webkit-match-parent
      .active
        padding 1rem
        font-size 1.1em
        line-height 1.7
        font-weight 700
        border-left-color #284db9
        &:hover
          color #0037ff
      .activeBlue
        color #0037ff
</style>