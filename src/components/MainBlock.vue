<template>
	<div class="main-block">
		<!-- <div class="background-image">
			<img src="@/assets/backgrounds/main-block-background.jpg" alt="">
			<img src="https://images-cdn.welcomesoftware.com/Zz0wZGI4ZTI2NjhlNGQxMWViODVlN2QzNTI0ZjhkZTQyOA==" alt="">

		</div> -->
		<div class="wrapper">
			<div class="custom-container">
				<div class="row">
					<div class="col-12 left-side">
						<div class="left-side-inner">
							<div class="pre-title">
								Some small text for pre-title.
							</div>
							<div class="title">
								<h1>Welcome to our website !</h1>
							</div>
							<div class="text">
								A cum esse, vel dolor rem minima enim provident, in fuga animi quibusdam consectetur dolorum
								nostrum voluptatibus?
								A cum esse, vel dolor rem minima enim provident, in fuga animi .
							</div>
							<div class="buttons">
								<button @click="buttonAction">Let's start!</button>
							</div>
						</div>
					</div>
					<div class="col-15 col-md-5 right-side"></div>
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
	// width: 100%;
	// height: 100%;
	// min-height: 560px;
	// max-height: 750px;
	min-height: 100vh;

	@media (max-width: 767px) {
		min-height: fit-content;
	}

	position: relative;

	background: rgba($color: $blue, $alpha: 0.3);


	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.wrapper {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		padding-top: 150px;
	}

	.custom-container {
		max-width: 1320px;
		margin: auto;
		padding: 0 15px;

		.left-side {
			&-inner {
				@include blur-effect;
				text-align: center;

				.pre-title {
					font-size: 14px;
					line-height: 20px;
					letter-spacing: 5px;
					margin-bottom: 10px;
				}

				.title {
					h1 {
						font-size: 100px;
						font-weight: 700;

						@media (max-width: 767px) {
							font-size: 70px;
						}

						@media (max-width: 575px) {
							font-size: 40px;
						}
					}

					margin-bottom: 50px;
				}

				.text {
					font-size: 14px;
					letter-spacing: 2px;
					max-width: 1000px;
					margin: auto;
				}

				.buttons {
					margin-top: 25px;
					display: flex;
					justify-content: center;

					button {
						@include theme-btn-active;
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
