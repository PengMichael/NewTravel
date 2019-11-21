import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from  '@/pages/detail/Detail'
/* import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Second from '@/components/sub/Second' */
Vue.use(Router)

export default new Router({
  routes: [
  {
     path: '/',
     name: 'Home',
     component: Home
   },
	{
      path: '/city',
      name: 'City',
      component: City
    },
	{
		path:'/detail:id',
		name:'Detail',
		component:Detail
	}   /*,{
		path:'/second',
		name:'Second',
		component:Second
	} */
	
  ],
  /*页面切换始终回到最顶部
  */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
