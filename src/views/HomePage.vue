<template>
	<div class="home-page">
		<BackgroundImage/>
		<HeaderComponent :activeMenu="'Home'"/>
		<MainBlock/>
		<AboutBlock/>
		<PortfolioComponent/>
		<FeedbackComponent/>
		<ContactBlock/>
		<FooterComponent :activeMenu="'Home'"/>
	</div>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage";
import HeaderComponent from "@/components/HeaderComponent";
import MainBlock from "@/components/MainBlock";
import AboutBlock from "@/components/AboutBlock";
import PortfolioComponent from "@/components/PortfolioComponent";
import FeedbackComponent from "@/components/FeedbackComponent";
import 	ContactBlock from "@/components/ContactBlock";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'HomePage',
  components: {
	BackgroundImage,
	HeaderComponent,
	MainBlock,
	AboutBlock,
	PortfolioComponent,
	FeedbackComponent,
	ContactBlock,
	FooterComponent,
  }
}
</script>

<style lang="scss" scoped></style>