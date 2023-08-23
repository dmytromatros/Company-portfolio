<template>
	<div class="portfolio-component theme-block">
		<div class="container">
			<div class="portfolio-title">{{ title }}</div>
			<div class="items-wrapper">
				<div v-for="(work, key) in computedWorks" :key="key" class="portfolio-item"
					:class="{ reverse: key % 2 != 0 }">
					<div class="portfolio-item-image">
						<img :src="work.image" alt="...">
					</div>
					<div class="portfolio-item-info">
						<div class="portfolio-item-info-name">{{ work.name }}</div>
						<div class="portfolio-item-info-text">{{ work.text }}</div>
						<div class="portfolio-item-info-link">
							<a :href="work.link" target="_blank" rel="noopener noreferrer"> {{ work.linkText }} </a>
						</div>
					</div>
				</div>
			</div>

			<div class="link-to-more">
				<router-link class="link" to="/about">Our works</router-link>
			</div>
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
			} while (num != 3);

			return works
		}
	}

}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.portfolio-component {
	// margin: 100px 0;
	background: linear-gradient(0deg, rgba($color: $blue, $alpha: 0.3) 10%, rgba($color: $pink, $alpha: 0.3) 100%);

	.portfolio-title {
		@include left-title;
		// margin-left: 50px;
	}

	.items-wrapper {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		gap: 100px;



		.portfolio-item {
			display: flex;
			min-height: 500px;
			@include blur-effect;
			padding: 0;

			// overflow: hidden;
			@media (max-width: 991px) {
				flex-direction: column;
				padding: 0 !important;
			}

			&-image {
				width: 50%;
				min-height: 100%;
				position: relative;
				z-index: 3;
				box-shadow: 0 0 25px 1px rgba($color: $text-color, $alpha: 0.3);
				border-radius: 15px;
				overflow: hidden;

				@media (max-width: 991px) {
					width: 100%;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			&-info {
				width: 50%;
				min-height: 100%;
				padding: 50px;
				position: relative;
				z-index: 2;

				@media (max-width: 991px) {
					width: 100%;
					padding: 50px 20px;
				}

				&-name {
					font-size: 30px;
					font-weight: 600;
					line-height: 150%;
					position: relative;
					padding-left: 20px;

					&:before {
						content: '';
						position: absolute;
						width: 5px;
						border-radius: 2px;
						height: 100%;
						left: 0;
						top: 0;
						background-color: $text-color;
					}

					margin-bottom: 30px;
				}

				&-text {
					font-size: 18px;
					letter-spacing: 2px;
					margin-bottom: 50px;
				}

				&-link {
					a {
						transition: 0.3s ease-in-out all;

						&:hover {
							opacity: 0.7;
						}
					}
				}
			}
		}

		.reverse {
			flex-direction: row-reverse;

			@media (max-width: 991px) {
				flex-direction: column;
			}
		}
	}

	.link-to-more {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 75px;

		.link {
			@include theme-btn;
		}
	}
}
</style>