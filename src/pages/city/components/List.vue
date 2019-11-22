<template>
   <div class="list" ref="wrapper">
     <div> 
     <div class="area">
       <div class="title border-topbottom" >当前城市</div>
       <div class="button-list">
         <div class="button-wrapper">
          <router-link to="/">
           <div class="button">	{{this.$route.query.cur}}</div>
           </router-link>
         </div>
       </div>
     </div>
     <div class="area">
       <div class="title border-topbottom">热门城市</div>
       <div class="button-list">
         <div class="button-wrapper" 
         v-for="item of hot"
         :key="item.id"
         @click="handleCityClick(item.name)"
         >
           <div class="button">{{item.name}}</div>
         </div>
       </div>
     </div>
     <div class="area" 
     v-for=" (item,key) of cities " 
     :key="key"
     :ref="key"
     >
       <div class="title border-bottom">{{key}}</div>
       <div class="item-list"  v-for="itemkey of item" :key="itemkey.id"
        @click="handleCityClick(itemkey.name)">
          <div class="item border-bottom" >
            {{itemkey.name}}
          </div>
       </div>
     </div>
     </div>
   </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
  export default{
    name:'CityList',
    props:{
      hot:Array,
      cities:Object,
      letter:String
      },
    computed:{
      //对象
        ...mapState({
          currencyCity:'city'
        })  //state辅助函数mapState：将$this.$store.state.city=>this.city
    },
    methods:{
      handleCityClick(city){
      //  this.$store.dispatch('changeCity',city) //dispatch派发给action
     // this.$store.commit('changeCity',city)
     this.changeCity(city)
     this.$router.push('/')
     },
      ...mapMutations(['changeCity'])//巴mutation 映射到changeCity方法里 这样就不需要commit函数了
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
     },
      watch:{
       letter(){
        if(this.letter){
          const element=this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
     }
   }
  }
</script>

<style lang="stylus" scoped>
     @import '~styles/varibles.styl'
     .border-topbottom
        &:before
          border-color:#ccc
        &:after
          border-color:#ccc
     .border-bottom
        &:before
          border-color:#ccc
   .list
     overflow: hidden
     position: absolute
     top: 1.58rem
     left: 0
     right: 0
     bottom: 0
     .title
       line-height:.54rem
       background-color: #EEEEEE
       padding-left: .2rem
       color: #666
       font-size: .26rem
     .button-list
       overflow: hidden
       padding: .1rem .6rem .1rem .1rem
       .button-wrapper
         float: left
         width: 33.33%
         .button
           margin: .1rem
           padding: .1rem 0
           text-align: center
           border: .02rem solid #ccc
     .item-list
       .item
         line-height: .76rem
         color: #666666
         padding-left: .2rem
         

</style>
