<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class='icon-img-content' :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
   props:{
      list:Array //如果图片首次加载为最后一张 ，可以在swiper上 加一个v-if="showSwiper"
    },
  data () {
    return {
      swiperOption: {
      	 autoplay: false,
      }
    }
   },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> swiper-container
   //在该范围内都可以左滑右滑
   height: 0
   padding-bottom: 50%
  .icons
   overflow:hidden
   height:0
   padding-bottom:50%
   .icon
    position :relative
    float:left
    width:25%
    padding-bottom:25%
    .icon-img
     position :absolute
     top:0
     left:0
     right:0
     bottom:.44rem
     box-sizing :border-box
     padding:.1rem
     .icon-img-content
      display:block
      margin:0 auto
      height:85%
    .icon-desc
     position: absolute
     left:0
     right:0
     bottom:0
     height:.44rem
     line-height :.4rem
     text-align:center
     color:$darkTextColor
     ellipsis()
</style>
