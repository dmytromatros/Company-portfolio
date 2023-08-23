<template>
	<div class="about-block theme-block" :class="{'pad-top': paddingTop}">
		<div class="container">
			<div class="about-block-title">{{ title }}</div>
			<div class="about-block-text">
				<p v-for="(text, key) in companyInfo" :key="key">{{ text }}</p>
			</div>
		</div>

	</div>
</template>

<script>

let titleAbout = require('/info.config.json').title.about
let companyInfo = require('/info.config.json').about_company.text

export default {
	name: "AboutBlock",
	props: {
		paddingTop: {
			type: Boolean,
			default: false
		}
	},	
	data() {
		return {
			title: titleAbout,
			companyInfo: companyInfo
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.pad-top{
	padding-top: 230px;
}
.about-block{

	background: linear-gradient(0deg,rgba($color: $pink, $alpha: 0.3) 0%, rgba($color: $blue, $alpha: 0.3) 100%) !important;

	&-title{
		@include left-title;
		margin-bottom: 70px;
	}
	&-text{

		display: flex;
		flex-direction: column;
		gap: 35px;
		position: relative;
		z-index: 1;

		p{
			@include blur-effect;
		}
	}
}
</style>