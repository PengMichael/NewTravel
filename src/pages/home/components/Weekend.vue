<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
       <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:'HomeWeekend',
    props:{
      list:Array //如果图片首次加载为最后一张 ，可以在swiper上 加一个v-if="showSwiper"
    },
    data(){
      return {
       /* weekendList:[{
        id:'0001',
        imgUrl:'../../../../static/img/cloud.jpg',
        title:'海洋世界',
        desc:'美丽的海洋世界带你去飞吧美丽的海洋世界带你去飞吧'
      },
      {
        id:'0002',
        imgUrl:'../../../../static/img/cloud.jpg',
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
   line-height: .8rem
   background:#eee
   //文本缩进
   text-indent:.2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.9%
   .item-img
    width:100%
  .item-info
    padding:.1rem
    .item-title
     line-height:.54rem
     font-size: .32rem
     ellipsis()
    .item-desc
     line-height:.4rem
     color:#ccc
     ellipsis() 
</style>
