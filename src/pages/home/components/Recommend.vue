<template>
  <div>
    <div class="title">我们去哪儿</div>
    <ul>
      <router-link tag="li" :to="'/detail'+ item.id" class="item border-bottom" v-for="item of list" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default{
    name:'HomeRecommend',
    props:{
      list:Array //如果图片首次加载为最后一张 ，可以在swiper上 加一个v-if="showSwiper"
    },
    data(){
      return {
        /* recommendList:[{
        id:'0001',
        imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        title:'海洋世界',
        desc:'美丽的海洋世界带你去飞吧美丽的海洋世界带你去飞吧'
      },
      {
        id:'0002',
        imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        title:'世纪缘',
        desc:'美丽的世纪缘带你去飞吧美丽的世纪缘带你去飞吧'
      }] */
      }
    }
  }
</script>

<style lang="stylus" scoped>
   @import '~styles/mixins.styl'
  .title
   margin-top:.2rem
   line-height: .8rem
   background:#eee
   //文本缩进
   text-indent:.2rem
  .item
   overflow: hidden
   display:flex //弹性布局
   height: 1.9rem
   .item-img
    width:1.7rem
    height:1.7rem
    padding:.1rem
   .item-info
    flex:1
    padding:.1rem
    min-width: 0
    .item-title
     line-height:.54rem
     font-size: .32rem
     ellipsis()
    .item-desc
     line-height:.4rem
     color:#ccc
     ellipsis()
    .item-button
     margin-top:.1rem
     background:#ff9300
     padding: 0.03rem
     border-redius:.06rem
     color:#fff
     
</style>
