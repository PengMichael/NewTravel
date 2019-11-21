<template>
   <div>
   <city-header></city-header>
   <city-search :cities="cities"></city-search>
   <city-list 
    :hot="hotCities"
    :cities="cities"
    :letter="letter"
    ></city-list>
   <city-alphabet 
   @change="handleLetterChange"
   :cities="cities"
   ></city-alphabet>
   </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CityList from './components/List'
  import CitySearch from './components/Search'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'
  export default{
    name:'City',
    data(){
      return{
        hotCities:[],
        cities:{ },
        letter:''
      }
    },
    components:{
      CityHeader,
      CityList,
      CitySearch,
      CityAlphabet
    },
    methods: {
      getCityInfo () {
        axios.get('/api/city.json')
         .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        console.log(res)
        res=res.data
        if(res.ret&&res.data){
        const data=res.data
        this.hotCities=data.hotCities
        this.cities=data.cities
        }
      },
      handleLetterChange(letter){
        this.letter=letter
      }
    },
    mounted(){
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped>
</style>
