<template>
	<div class="back-image-main">
		<img v-if="checkRoute == '/team'"  src="@/assets/backgrounds/team-background.jpg" alt="">
		<img v-if="checkRoute == '/about'"  src="@/assets/backgrounds/works-background-1.jpg" alt="">
		<img v-if="checkRoute == '/price-list'"  src="@/assets/backgrounds/price-background.jpg" alt="">
		<img v-if="checkRoute == '/'" src="https://images-cdn.welcomesoftware.com/Zz0wZGI4ZTI2NjhlNGQxMWViODVlN2QzNTI0ZjhkZTQyOA==" alt="">
		<div  class="dark-color"></div>
	</div>
</template>

<script>
export default {
	name: 'BackgroundImage',
	data(){
		return{
			routes: ['/price-list', '/team' , '/works']
		}
	},
	computed: {
		checkRoute(){
			return this.$route.path
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
	.back-image-main{
		position: fixed;
		z-index: 0;
		width: 100vw;
		height: 100vh;

		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
		}
		.dark-color{
			position: relative;
			width: 100%;
			height: 100%;
			// background: linear-gradient(70deg, rgba($color: $text-color, $alpha: 0.3) 10%, rgba($color: $text-color, $alpha: 0.3) 100%);		
		}
	}

</style>