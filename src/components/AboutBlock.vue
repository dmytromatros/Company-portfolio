<template>
	<div class="about-block theme-block">
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

.about-block{

	background: rgba($color: $blue, $alpha: 0.3);

	&-title{
		@include left-title;
		margin-bottom: 70px;
	}
	&-text{

		display: flex;
		flex-direction: column;
		gap: 35px;

		p{
			@include blur-effect;
		}
	}
}
</style>