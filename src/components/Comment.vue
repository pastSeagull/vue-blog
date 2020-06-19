<template lang='pug'>
  article
    div.comment-box
      div.avatar
        img(src='../assets/logo.png')
      div.commented(v-for='item in getComment')
        div.commented-head
          p {{item.name}}
        div.eide-comment
          p {{item.comment}}
      div.comment
        div.comment-head
        div.comment-box
          form.new-comment
            textarea(rows='8' cols='40')
            article.message-box
              div.message
                label(for='name') 昵称*:
                input(type='text' name='name')
              div.btm
                button comment
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      comment: []
    }
  },
  created: function () {
    this.$api.getData.getData().then(res => {
      this.comment = res
    })
  },
  computed: {
    getComment () {
      return this.comment.filter(el => el.articleId == this.$route.params.navId)
    }
  }
}
</script>

<style lang='stylus' scoped>
article
  max-width 700px
  margin 0 auto
  padding 1rem 1rem
  .comment-box
    max-width 500px
    margin 0 auto
    position relative
    .avatar
      position absolute
      left -40px
      img
        display inline-block
        width 2rem
        height 2rem
    .commented
      margin-bottom 2rem
      border 1px solid #d1d5da
      .commented-head
        font-size 0.7rem
        height 2rem
        color #586069
        background-color #f6f8fa
        border-bottom 1px solid #d1d5da
        border-top-left-radius 3px
        border-top-right-radius 3px
      .eide-comment
        padding 1rem
    .comment
      margin-top 0.5rem
      border-radius 5px 5px 5px 5px
      background-color #f6f8fa
      border 1px solid #e1e4e8
      .comment-head
        font-size 0.7rem
        height 2rem
        color #586069
        background-color #f6f8fa
        border-bottom 1px solid #d1d5da
        border-top-left-radius 3px
        border-top-right-radius 3px
      .comment-box
        text-align center
        .new-comment
          textarea
            display block
            width 96%
            min-height 100px
            max-height 500px
            padding 8px
            resize vertical
            background-color #fafbfc
            border 1px solid #f6f8fa
            border-bottom 1px solid #d1d5da
          .message-box
            max-width 400px
            .message
              float left
              text-align left
              input
                border 1px #ccc solid
                border-radius 5px 5px 5px 5px
                height 1.5rem
            .btm
              button
                color hsla(0, 0%, 100%, 0.75)
                background-color #92dfe5
                background-image none
                border-color rgba(27, 31, 35, 0.2)
                box-shadow none
                position relative
                display inline-block
                padding 3px 8px
                font-size 14px
                font-weight 600
                white-space nowrap
                vertical-align middle
                cursor pointer
                -webkit-user-select none
                -moz-user-select none
                -ms-user-select none
                user-select none
                background-repeat repeat-x
                background-position -1px -1px
                background-size 110% 110%
                border 1px solid rgba(27, 31, 35, 0.2)
                border-radius 0.25em
                -webkit-appearance none
</style>