<template lang='pug'>
  div.arcle
    Aside(:list='filtration' v-show='this.$store.state.sidebar')
    div.docs
      div.docs-content
        router-view
      Comment
</template>

<script>
import '@/assets/styles/github-markdown-css.css'
import Aside from '@/components/header/Aside'
import Comment from '@/components/Comment'


export default {
  name: 'Aricle',
  data () {
    return {
      navId: this.$route.params.id,
      list: this.$store.state.list
    }
  },
  computed: {
    filtration () {
      return this.list.filter(item => item.navId == this.$route.params.id | item.link == this.$route.params.id)
    }
  },
  components: {
    Aside,
    Comment
  }
}
</script>

<style lang='stylus' scoped>
.docs
  padding-left 16rem
  @media screen and (max-width: 719px)
    padding-left 0
  .docs-content
    max-width 740px
    margin 0 auto
    padding 5rem 2.5rem
    border-bottom 1px #ccc solid
</style>