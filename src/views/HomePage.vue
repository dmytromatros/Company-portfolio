<template>
	<div>
		<BackgroundImage/>
		<HeaderComponent/>
		<MainBlock/>
		<AboutBlock/>
		<PortfolioComponent/>
		<FeedbackComponent/>
	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import MainBlock from "@/components/MainBlock";
import AboutBlock from "@/components/AboutBlock";
import PortfolioComponent from "@/components/PortfolioComponent";
import FeedbackComponent from "@/components/FeedbackComponent";
import BackgroundImage from "@/components/BackgroundImage";

export default {
  name: 'HomePage',
  components: {
	HeaderComponent,
	MainBlock,
	AboutBlock,
	PortfolioComponent,
	FeedbackComponent,
	BackgroundImage
  }
}
</script>

<style lang="scss" scoped></style>