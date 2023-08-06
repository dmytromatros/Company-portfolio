<template>
	<div class="back-image-main">
		<img src="@/assets/backgrounds/main-block-background.jpg" alt="">
		<div class="dark-color"></div>
	</div>
</template>

<script>
export default {
	name: 'BackgroundImage'
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