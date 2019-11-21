<template>
  <div>
     <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
     ></detail-banner>
     <detail-header ></detail-header>
     <detail-list></detail-list>
     <div class="content">
        <detail-list :list="list"></detail-list>
     </div>
  </div>

</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
import axios from 'axios'
export default {
   name: 'Detail',
   components: {
     DetailHeader,
     DetailBanner,
     DetailList
   },
   data () {
     return {
       sightName:'',
       bannerImg:'',
       gallaryImgs:[],
       list :[]
     }
   },
   methods:{
     getDetailInfo(){
       axios.get('/api/detail.json?id=',{
         params:{
           id: this.$route.params.id
         }
       }).then(this.handleGetDataSucc)
     },
     handleGetDataSucc (res){
       res=res.data
       if(res.ret&&res.data){
         const data=res.data
         this.sightName=data.sightName
         this.bannerImg=data.bannerImg
         this.gallaryImgs=data.gallaryImgs
         this.list=data.categoryList
       }
     } 
   },
   mounted(){
     this.getDetailInfo();
   },
   //用activated钩子函数处理不同界面的详情界面。
 }
</script>

<style lang="stylus" scoped>
    .content
      height:  50rem
</style>
