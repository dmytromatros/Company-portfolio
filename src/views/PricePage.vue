<template>
	<div class="price-page">
		<BackgroundImage />
		<HeaderComponent  :activeMenu="'Prices'"/>
		<PriceComponent />
		<FooterComponent :activeMenu="'Prices'"/>
	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import PriceComponent from "@/components/PriceComponent";
import BackgroundImage from "@/components/BackgroundImage";
import FooterComponent from "@/components/FooterComponent";
export default {
	name: "PricePage",
	components: {
		HeaderComponent,
		PriceComponent,
		BackgroundImage,
		FooterComponent
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
</style>