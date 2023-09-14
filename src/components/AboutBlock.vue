<template>
	<div class="about-block theme-block" :class="{ 'pad-top': paddingTop }">
		<div class="about-block-title">
			<span>{{ title }}</span>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-5">
					<div class="about-block-image-wrapper">
						<img src="@/assets/about-image.png" alt="">
					</div>
				</div>
				<div class="col-12 col-lg-7">

					<div class="about-block-cards">

						<div v-for="(card, key) in companyInfo" :key="key" class="about-block-card">
							<router-link :to="`/price-list`">
								<div class="row">
									<div class="col-12 col-sm-4 about-block-card-image">
										<img v-if="card.name == 'UI/UX design'" src="@/assets/about-ux.png" alt="">
										<img v-if="card.name == 'Front-end development'" src="@/assets/about-front.png"
											alt="">
										<img v-if="card.name == 'SMM'" src="@/assets/about-smm.png" alt="">
										<img v-if="card.name == 'Copywriting'" src="@/assets/about-copy.png" alt="">
									</div>
									<div class="col-12 col-sm-8 about-block-card-info">
										<div class="about-block-card-info-name">
											<span>{{ card.name }}</span>
										</div>
										<div class="about-block-card-info-description">
											<span>{{ card.description }}</span>
										</div>
									</div>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

let titleAbout = require('/info.config.json').title.about
let companyInfo = require('/info.config.json').about_company.provides

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

.pad-top {
	padding-top: 230px;
}


.about-block {

	// background: linear-gradient(0deg,rgba($color: $pink, $alpha: 0.3) 0%, rgba($color: $blue, $alpha: 0.3) 100%) !important;
	background-color: $white;
	box-shadow: 0 0 50px 1px $main-theme-color;
	border-radius: 50px;
	margin: -50px 0;
	position: relative;
	z-index: 2;
	color: $main-theme-color;
	padding: 80px 0 100px 0;
	@media (max-width: 575px) {
		border-radius: 25px;
	}
	&-title {
		@include title;

	}

	&-image-wrapper {
		width: 100%;
		height: 100%;
		margin-left: -100px;

		@media (max-width: 991px) {
			margin-left: 0;
		}

		img {
			width: calc(100% + 170px);
			height: 100%;
			object-fit: contain;

			@media (max-width: 991px) {
				width: 100%;
			}
		}
	}

	&-cards {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	&-card {
		padding: 20px;
		border-radius: 15px;
		@include blur;
		box-shadow: 0 0 10px 1px rgba($color: $pink, $alpha: 0.4);
		transition: 0.3s ease-in-out all;

		.row {
			align-items: center;
		}

		&-image {
			@media (max-width: 575px) {
				display: flex;
				justify-content: center;
			}
		}

		&-image img {
			width: 170px;
			height: 170px;
			object-fit: contain;

			// @media (max-width: 575px) {
			// 	width: 100%;
			// 	height: auto;
			// }
		}

		&-info {
			&-name {
				font-weight: 600;
				margin-bottom: 15px;
				width: fit-content;
				transition: 0.3s ease-in-out all;

				>* {
					color: $main-theme-color;
					transition: 0.3s ease-in-out all;
				}
			}

			&-description {
				border-left: 4px solid rgba($color: $pink, $alpha: 0.4);
				padding-left: 15px;
				transition: 0.3s ease-in-out all;

				>* {
					color: $main-theme-color;
					transition: 0.3s ease-in-out all;
				}
			}
		}

		&:hover {
			background-color: rgba($color: $blue, $alpha: 0.5);

			.about-block-card-info-name,
			.about-block-card-info-description {
				transition: 0.3s ease-in-out all;

				>* {
					color: $white ;
					transition: 0.3s ease-in-out all;
				}
			}

			.about-block-card-info-description {
				border-color: $white;
			}
		}
	}
}
</style>