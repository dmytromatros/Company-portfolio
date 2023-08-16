<template>
	<div class="team-page">
		<BackgroundImage />
		<HeaderComponent />
		<TeamBlock />
		<FooterComponent />
	</div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import TeamBlock from "@/components/TeamBlock";
import BackgroundImage from "@/components/BackgroundImage";
import FooterComponent from "@/components/FooterComponent";
export default {
	name: "TeamPage",
	components: {
		HeaderComponent,
		TeamBlock,
		BackgroundImage,
		FooterComponent
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
</style>