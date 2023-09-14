<template>
	<div class="main-block">
		<div class="background-image">
			<div class="background-lights">
				<div class="background-lights-1"></div>
				<div class="background-lights-2"></div>
			</div>
			<img src="@/assets/main-back-image-2-large.png" alt="">
		</div>
		<div class="wrapper">
			<div class="custom-container">
				<div class="row">
					<div class="col-12 col-lg-7 left-side">
						<div class="left-side-inner">
							<div class="back-shadow"></div>
							<div class="pre-title">
								Some small text for pre-title.
							</div>
							<div class="title">
								<h1>Highly qualified</h1>
								<h2>website development</h2>
							</div>
							<div class="text">
								Unlock your digital potential with our highly qualified website development services. We
								create cutting-edge web solutions tailored to your business needs.
							</div>
							<div class="buttons">
								<!-- <button @click="buttonAction">Let's start!</button> -->
								<button @click="buttonAction">Order a website</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<!-- <div class="bottom-text">
		</div> -->
	</div>
</template>

<script>

let titleAbout = require('/info.config.json').title.about

export default {
	name: 'MainBlock',
	data() {
		return {
			titleAbout: titleAbout
		}
	},
	methods: {
		buttonAction() {
			console.log('click')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.main-block {

	min-height: calc(100vh + 50px);
	max-height: 900px;
	// padding-bottom: 50px;

	@media (max-width: 767px) {
		min-height: fit-content;
	}

	position: relative;

	// background: rgba($color: $blue, $alpha: 1);
	// background: linear-gradient(90deg,rgba($color: #fff, $alpha: 1) 0%, rgba($color: $blue, $alpha: 0.3) 100%) !important;
	background: linear-gradient(45deg, $light-pink 0%, rgba(0, 0, 255, 0.3) 100%);
	// background: linear-gradient(318deg, $light-pink 0%, rgba(0, 0, 255, 0.3) 100%);



	.background-image {
		position: absolute;
		top: 0%;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		// background: linear-gradient(110deg, rgba($color: $main-theme-color, $alpha: 1) 0%, rgba($color: $main-theme-color, $alpha: 0.5) 100%) !important;

		img {
			position: relative;
			z-index: 1;
			width: 100%;
			top: 15%;
			height: 80%;
			object-fit: contain;
			object-position: right;

			@media (max-width: 991px) {
				object-fit: cover;
				object-position: center;
			}
		}

		.background-lights {
			position: absolute;
			z-index: 0;
			width: 100%;
			height: 100%;

			&-1 {
				width: 200px;
				height: 200px;
				background-color: rgb(199, 198, 215);
				box-shadow: 0 0 200px 250px rgb(199, 198, 215);
				position: absolute;
				top: 45%;
				right: 18%;
				border-radius: 50%;
				opacity: 0.5;
			}

			&-2 {
				width: 150px;
				height: 150px;
				background-color: #5118ff;
				box-shadow: 0 0 150px 200px #5118ff;
				position: absolute;
				top: 15%;
				left: 0%;
				border-radius: 50%;
				opacity: 0.7;
				display: none;
			}
		}
	}

	.wrapper {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		max-height: 900px;

		min-height: 500px;
		z-index: 2;
		// padding-top: 150px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.custom-container {
		max-width: 1320px;
		margin: auto;
		padding: 0 15px;
		flex: 1 1 auto;

		.left-side {
			&-inner {
				// @include blur-effect;
				// border: none;
				// padding: 40px;
				text-align: left;
				position: relative;

				.back-shadow {
					width: 550px;
					height: 150px;
					background-color: #5118ff;
					box-shadow: 0 0 150px 200px #5118ff;
					position: absolute;
					top: 35%;
					left: 15%;
					border-radius: 50%;
					opacity: 0.7;
					z-index: -1;
				}

				.pre-title {
					font-size: 14px;
					line-height: 20px;
					letter-spacing: 5px;
					margin-bottom: 10px;
					display: none;
				}

				.title {
					@include blur-effect;
					width: fit-content;

					@media (max-width: 575px) {
						width: 100%;
					}

					padding: 30px;

					h2 {
						// color: #8900c0;
						// text-shadow: #ffffff 1px 0 10px;
						font-size: 50px;
						text-shadow: #7d0070 0px 0 10px;
					}

					h1 {
						text-shadow: #7d0070 0px 0 10px;
						font-size: 70px;
					}

					h1,
					h2 {
						font-weight: 700;

						// word-wrap: break-word;
						// word-break: break-all;
						@media (max-width: 576px) {
							text-align: center;
						}

						@media (max-width: 767px) {
							font-size: 50px;
						}

						@media (max-width: 575px) {
							font-size: 35px;
						}

						@media (max-width: 400px) {
							word-break: break-all;
						}
					}

					margin-bottom: 50px;
				}

				.text {
					font-size: 14px;
					letter-spacing: 2px;
					max-width: 1000px;
					// margin: auto;
					max-width: 550px;
					// @include blur-effect;
					// padding: 15px;
					position: relative;
					padding-left: 35px;

					&::before {
						content: '';
						position: absolute;
						left: 0;
						top: 0;
						height: 100%;
						width: 5px;
						@include blur-effect;
						padding: 0;

						@media (max-width: 767px) {
							padding: 0;
						}
					}
				}

				.buttons {
					margin-top: 50px;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					gap: 20px;

					button {
						&:first-child {
							@include theme-btn-active;
						}

						&:last-child {
							@include theme-btn-white
						}
					}
				}
			}
		}
	}

	.bottom-text {
		width: 100%;
		padding: 80px 100px;
		padding-top: 150px;
		position: absolute;
		z-index: 15;
		bottom: 0px;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(0deg, rgba($color: $blue, $alpha: 0.3) 10%, rgba($color: $pink, $alpha: 0.01) 100%);
		@include title-of-block;
	}
}
</style>
