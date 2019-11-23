export default{
    changeCity (state,city){
      state.city=city
      try{
              localStorage.city=city
      }catch (e) {}
    },
    currentCity (state,lo){
      state.lo=lo
      try{
              localStorage.lo=lo
      }catch (e) {}
    }
    
  }