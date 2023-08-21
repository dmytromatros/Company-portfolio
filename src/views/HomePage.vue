<template>
	<div class="home-page">
		<BackgroundImage/>
		<HeaderComponent :activeMenu="'Home'"/>
		<MainBlock/>
		<AboutBlock/>
		<PortfolioComponent/>
		<FeedbackComponent/>
		<FooterComponent :activeMenu="'Home'"/>
	</div>
</template>

<script>
import AboutBlock from "@/components/AboutBlock";
import HeaderComponent from "@/components/HeaderComponent";
import MainBlock from "@/components/MainBlock";
import PortfolioComponent from "@/components/PortfolioComponent";
import FeedbackComponent from "@/components/FeedbackComponent";
import BackgroundImage from "@/components/BackgroundImage";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'HomePage',
  components: {
	HeaderComponent,
	MainBlock,
	PortfolioComponent,
	FeedbackComponent,
	BackgroundImage,
	FooterComponent,
	AboutBlock
  }
}
</script>

<style lang="scss" scoped></style>