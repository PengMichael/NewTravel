<template>
	<div class="wrapper">
	  <swiper :options="swiperOption"  >
	    <swiper-slide v-for="item of list" :key="item.id">
			<img  class="swiper-img"  :src="item.imgUrl" />
		</swiper-slide>
	      <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
    </div>
</template>

<script>
	export default{
		name: 'HomeSwiper',
    props:{
      list:Array //如果图片首次加载为最后一张 ，可以在swiper上 加一个v-if="showSwiper"
    },
		data () {
		     return {
				 swiperOption: {
					 autoplay: 3000,
					 initialSlide: 1,
					 loop: true,
					pagination: '.swiper-pagination' 
				  }
			  }
		 },
    computed:{
      showSwiper(){
        return this.list.length
      }
	}
  }
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
	 background: #FFFFFF
	.wrapper
	  overflow: hidden
	  width: 100%
	  height: 0
	  padding-bottom: 55%
	  background: #eee
	  .swiper-img
	    width: 100%
</style>
