<template>
	<div class="about-page">
		<BackgroundImage />
		<HeaderComponent  :activeMenu="'About'"/>
		<AboutBlock :paddingTop="true"/>
		<AllWorksBlock />
		<FooterComponent  :activeMenu="'About'"/>
	</div>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";
import AboutBlock from "@/components/AboutBlock";
import AllWorksBlock from "@/components/AllWorksBlock";
import BackgroundImage from "@/components/BackgroundImage";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'WorksPage',
  components: {
		HeaderComponent,
		AboutBlock,
		BackgroundImage,
		FooterComponent,
		AllWorksBlock
	}
}
</script>

<style lang="scss" scoped></style>