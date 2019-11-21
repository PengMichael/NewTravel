<template>
  <ul class="list">
    <li class="item" 
     v-for="item of letters" 
     :key="item"
     :ref="item"
     :class="{active:ww}"
     @touchstart="handleTouchStart"
     @touchmove="handleTouchMove"
     @touchend="handleTouchEnd"
     @click="handleLetterClick"
     >{{item}}</li>
  </ul>
</template>

<script>
  export default{
    name:'CityAlphabet',
    props:{
      cities:Object
    },
    computed:{
      letters () {
        const letters =[]
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    data () {
      return {
        touchStatus:false,
        ww:false
      }
    },
    methods:{
      handleLetterClick (e) {
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus=true
        
      },
      handleTouchMove (e) {
        if(this.touchStatus){
          const startY = this.$refs['A'][0].offsetTop
          const touchY= e.touches[0].clientY-79
          const index = Math.floor((touchY-startY)/20)
          if(index >= 0 && index < this.letters.length ){
          this.$emit('change',this.letters[index])
          this.ww=this.touchStatus
          }
        }
      },
      handleTouchEnd () {
        touchStatus:true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .active
    color: red
  .list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    top:1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .34rem
      text-align: center
      color: $bgColor
      list-style:none
</style>
