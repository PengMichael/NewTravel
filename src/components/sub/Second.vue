<template>
	<div class="first-app">
		{{msg}}
		<p><confirm text="注册" @message="getMessage"></confirm></p>
         <p><router-link to="/first">去第yi个页面</router-link></p>
	</div>
</template>

<script>
	import Confirm from '../sub/Confirm'
	export default{
		name:"First",
		components:{
			Confirm
		},
		data(){
			return {
				msg:"ssvsvv"
			};
		},
		methods:{
			getMessage(val){
				alert(val);
			}
		}
	}
</script>

<style>
</style>
