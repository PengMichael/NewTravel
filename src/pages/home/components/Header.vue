<template>
	<div class="header">
		<div class="header-left" >
		  <span class="iconfont back-icon">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
     </div>
		<!-- <router-link to="/city"> -->
		 <div class="header-right" @click="currentCity()">
			{{local}} 
			<span class="iconfont arrow-icon">&#xe615;</span>
		 </div>      
		<!-- </router-link> -->
	</div>
</template>

<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import { location } from  '../../../store/amap.js'
	export default {
		name: 'HomeHeader',
    data () {
          return{
             local:'定位中..',
             current:'定位中..',
             
            // change:true
          }
    },
    computed:{
      ...mapState(['city']),  //state辅助函数mapState：将$this.$store.state.city=>this.city
      //...mapState(['local']),
      //...mapGetters(['doubleCity'])
    },
    methods: {
             checkCity() {
               console.log(this.city)
               if(this.city==" "){
                 /**获取地图定位*/
                   let _that = this
                   let _change = this
                   let geolocation = location.initMap("map-container")
                   geolocation.getLocalCity(function(status, result) {
                         if (status === 'complete' && result.info === 'OK') {
                             if (result && result.city && result.bounds) {
                                  _that.local   = result.city.split("市")[0]
                                  _that.current = result.city.split("市")[0]
                                  console.log(_that.current)
                                  //_change.changeLocation()
                             }
                         } else {
                           
                         }
                        
                     });
                 }else {
                   let _changeCity =this
                       _changeCity.local= this.city
                       console.log(_changeCity.local)
                 }
               },
               /* changeLocation() {
                 console.log(this.city)
                 if(this.city!=" " && this.city!= undefined){
                   let _changeCity =this
                       _changeCity.local= this.city
                       //console.log(_changeCity.local)
                 } 
               }, */
               currentCity() {
               /*   let cur = this.current.split(" ")
                   */
                 this.$router.push({path: '/city', query: { cur:this.current }})
                 },
             },
         mounted() {
            this.checkCity()// 调用获取地理位置
        }
	}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
