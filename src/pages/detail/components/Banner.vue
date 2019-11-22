<template>
    <div>
       <div class="banner" @click="handleBannerClick">
       <img class="banner-image" :src="bannerImg"/> 
        <div class="banner-info">
         <div class="banner-title">
           {{this.sightName}}
         </div>
         <div class="banner-number"> 
           <span class="banner-icon iconfont" >&#xe647;</span>
           {{this.bannerImgs.length}}
         </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      >
      </common-gallary>
      </fade-animation>
   </div>
</template>

<script>
   import CommonGallary  from 'common/gallary/Gallary'
   import FadeAnimation  from 'common/fade/Fade'
   export default {
     name: 'DetailBanner',
     props:{
         sightName:String,
         bannerImg:String,
         bannerImgs:Array
       },
     data () {
       return {
          showGallary: false,
          /* imgs : ['https://imgs.qunarzz.com/vs_ceph_vs_tts/ca4c76c8-c466-4a14-8aa2-992618ed4ca9.jpg_r_390x260x90_7e849ab4.jpg',
          'https://imgs.qunarzz.com/vs_ceph_vs_tts/fd182549-be6e-4e77-ac66-163d6e622764.jpg_r_390x260x90_a2eaea1c.jpg',
          'https://imgs.qunarzz.com/vs_ceph_vs_tts/a06fe84f-9877-456a-928b-c83b9bd0f877.jpg_r_390x260x90_d220ad6f.jpg' ] */
          }
     },
     methods: {
       handleBannerClick () {
         this.showGallary = true
       },
       handleGallaryClose () {
           this.showGallary = false
       }
     },
     components:{
       CommonGallary,
       FadeAnimation
     }
   }
</script>

<style lang="stylus" scoped>
   .banner
     position: relative
     overflow: hidden
     height: 0
     padding-bottom: 50%
     .banner-image
       width:100%
     .banner-info
       display: flex
       position: absolute
       left:0
       right:0
       bottom:0
       line-height: .6rem
       color: #fff
       background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))//渐变色
      .banner-title
         flex: 1
         font-size: .32rem
         padding: 0 .2rem
      .banner-number
         height: .32rem
         line-height: .32rem
         margin-top: .14rem
         padding:0 .4rem
         border-radius: .2rem
         background: rgba(0,0,0,0.8)
         font-size: .24rem
         .banner-icon
           font-size: .24rem
</style>
