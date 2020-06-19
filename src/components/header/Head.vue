<template lang="pug">
  header
    header.navbar
      div.sidebar-buttom(@click='sidebar' v-clickoutside="elseSidebar")
        svg-icon(icon-class='list')
      a.home-link
        span.site-name pastSeagull
      div.links
        div.search
          input
        nav.nav-links
          div.nav-item(v-for="(item, index) in this.$store.state.nav" :key='item.id')
            router-link.nav-link(@click.native='bottomBlue(index)' :class='{navLinkClick: $store.state.isClick == index}'
                                 :to='{name: item.link, params: {id: item.id}}') {{item.title}}
    Aside(v-show='isAside')
</template>

<script>
import Aside from './Aside'
export default {
  name: 'Head',
  data () {
    return {
      isAside: false,
      screenWidth: document.body.clientWidth,
    }
  },
  components: {
    Aside
  },
  mounted () {
    // 检测当前屏幕大小
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        if (window.screenWidth < 719) {
          this.$store.state.sidebar = true
        }
        that.screenWidth = window.screenWidth
      })()
    }
  },
  methods: {
    sidebar () {
      this.$api.getData.getData().then(res => {
        console.log(res)
      })
      // 判断路由，根目录下正常点击，非根目录则关闭
      if (this.$router.currentRoute.path == '/') {
        this.isAside == false ? this.isAside = true : this.isAside = false
      } else {
        this.isAside = false
        this.$store.commit('leftDebar')
      }
    },
    elseSidebar (e) {
      this.isAside = false
      if (this.screenWidth < 719) {
        this.$store.commit('elsewhere')
      }
    },
    bottomBlue (index) {
      this.$store.commit('alterBlue', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.navbar
  position fixed
  top 0
  left 0
  padding 0.7rem 1.5rem
  line-height 2.2rem
  z-index 20
  right 0
  height 3.6rem
  background-color #fff
  box-sizing border-box
  border-bottom 1px solid #eaecef
  .sidebar-buttom
    display none
    cursor pointer
    position absolute
    top 0.6rem
    left 1rem
    @media screen and (max-width: 719px)
      display block
  .home-link
    display inline-block
    .site-name
      font-size 1.3rem
      font-weight 600
      color #000
      position relative
      top -7px
      left 0px
      transition all 0.2s ease
      @media screen and (max-width: 719px)
        left 27px
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color #fff
    white-space nowrap
    font-size 0.9rem
    position absolute
    right 1.5rem
    top 0.7rem
    display flex
    .search
      display inline-block
      position relative
      margin-right 1rem
      .seek
        width 10rem
      input
        cursor text
        width 10rem
        height 2rem
        color #404040
        display inline-block
        border 1px solid #cfd4db
        border-radius 2rem
        font-size 0.9rem
        line-height 2rem
        padding 0 0.5rem 0 2rem
        outline none
        transition all 0.2s ease
        background url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M830.486 796.125L672.791 638.428c44.96-52.8 72.109-121.232 72.109-196.016 0-167.084-135.448-302.533-302.532-302.533S139.835 275.328 139.835 442.412s135.449 302.532 302.533 302.532c74.783 0 143.216-27.15 196.017-72.109l157.717 157.697c9.5 9.499 24.885 9.499 34.384 0s9.5-24.908 0-34.407zM442.366 698.4c-141.38 0-255.988-114.632-255.988-255.99 0-141.402 114.608-255.988 255.989-255.988 141.38 0 255.99 114.586 255.99 255.989 0 141.357-114.61 255.99-255.99 255.99z' fill='%23707070'/%3E%3C/svg%3E") 0.5rem 0.4rem no-repeat
        background-size 1.4rem
        &:hover
          border-color #284db9
          width 10rem
        @media screen and (max-width: 960px)
          cursor pointer
          width 0
          border-color transparent
          position relative
    .nav-links
      display inline-block
      @media screen and (max-width: 719px)
        display none
      .nav-item
        position relative
        display inline-block
        margin-left 1.5rem
        line-height 2rem
        .nav-link
          line-height 1.4rem
          color inherit
        .nav-link:hover
          margin-bottom -2px
          border-bottom 2px solid #0037ff
        .navLinkClick
          margin-bottom -2px
          border-bottom 2px solid #0037ff
</style>