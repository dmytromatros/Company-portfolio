<template>
	<div class="portfolio-component theme-block">
		<div class="background">
			<img src="@/assets/backgrounds/portfolio-back.png" alt="">
		</div>
		<div class="container">
			<div class="portfolio-title">{{ title }}</div>
			<div class="items-wrapper row">
				<div v-for="(work, key) in computedWorks" :key="key" class="col-12 col-lg-6 col-xl-4">
					<div class="portfolio-item">
						<div class="portfolio-item-technologies">
							<div v-for="(tech, index) in work.technologies" :key="index"
								class="portfolio-item-technologies-item">
								{{ tech }}
							</div>
						</div>
						<div class="portfolio-item-name">
							{{ work.name }}
						</div>
						<a :href="work.link">
							<div class="portfolio-item-main">
								<img :src="work.image" :alt="work.name">
							</div>
						</a>
					</div>
				</div>

			</div>

			<!-- <div class="link-to-more">
				<router-link class="link" to="/about">Our works</router-link>
			</div> -->
		</div>
	</div>
</template>


<script>

let title = require('/info.config.json').title.portfolio

let works = require('/info.config.json').works


export default {
	name: 'PortfolioComponent',
	data() {
		return {
			title: title,
			works: works
		}
	},
	computed: {
		computedWorks() {
			let works = []
			let num = 0
			do {
				works.push(this.works[num])

				num++;
			} while (num != 6);

			return works
		}
	}

}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.portfolio-component {
	// margin: 100px 0;
	background: linear-gradient(45deg, $light-pink 0%, rgba(0, 0, 255, 0.3) 100%);
	position: relative;
	z-index: 1;
	padding: 150px 0 200px 0;

	.background {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0.1;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}

	.container {
		position: relative;
		z-index: 2;
	}

	.portfolio-title {

		margin: auto;
		min-width: 250px;
		font-size: 27px;
		letter-spacing: 3px;
		font-weight: 700;
		margin-bottom: 30px;
		position: relative;
		background-color: $white;
		color: #0e135f;
		border-radius: 50px;
		width: fit-content;
		padding: 25px 65px;
		box-shadow: 0 0 20px 1px #0e135f;
		z-index: 2;

		&:before,
		&:after {
			content: "";
			position: absolute;
			width: 3px;
			height: 150px;
			top: -150px;
			left: 75px;
			background-color: $white;
		}

		&:after {
			right: 75px;
			left: auto;
		}
	}

	.items-wrapper {
		margin-top: 100px;
		row-gap: 50px;

		.portfolio-item {
			padding: 0 15px;

			&-technologies {
				width: fit-content;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: auto;
				border: 2px solid $white;
				border-radius: 5px;
				@include blur;
				background-color: rgba($color: $white, $alpha: 0.3);
				overflow: hidden;

				&-item {
					padding: 10px 20px;
					transition: 0.3s ease-in-out all;
					cursor: default;
					font-weight: 600;
					letter-spacing: 2px;

					&:not(:last-child) {
						border-right: 2px solid $white;
					}

					&:hover {
						background-color: rgba($color: $pink, $alpha: 1);
					}
				}
			}

			&-name {
				text-align: center;
				color: $white;
				font-weight: 600;
				letter-spacing: 2px;
				margin: 30px 0px 0 0px;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
				background-color: $white;
				color: $main-theme-color;
				width: fit-content;
				padding: 8px 15px;
				position: relative;
				z-index: 2;

			}

			&-main {
				// margin-top: 25px;
				@include blur;
				background-color: rgba($color: $white, $alpha: 0.15);
				border-radius: 8px;
				border: 2px solid $white;
				overflow: hidden;
				width: 100%;
				height: 300px;
				box-shadow: 2px 2px 10px 1px rgba($color: $main-theme-color, $alpha: 1);
				position: relative;
				z-index: 1;
				border-top-left-radius: 0;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}</style>