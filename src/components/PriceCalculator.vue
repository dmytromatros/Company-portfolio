<template>
	<div class="price-calculator">
		<div class="price-calculator-title">
			<span>{{ title }}</span>
		</div>
		<div class="container">
			<div class="row main-row">
				<div class="col-12 col-lg-8">
					<div class="price-calculator-board">
						<div class="price-calculator-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae quaerat optio. Laboriosam,
							laudantium! Labore ratione quod tempora sit! Maiores error excepturi voluptatibus numquam?
							Voluptate facere officia veritatis quas cum aliquam voluptas quo tempore sunt. Animi, quis
							laudantium eveniet non sint, dolore tempore, natus accusantium officiis iste ratione nisi qui.
						</div>
						<div v-if="values.length" class="price-calculator-inputs">
							<div v-for="(input, key) in inputs" :key="key" class="price-calculator-input">
								<div v-if="input.value == 'min-max'" class="min-max-input">
									<label for="volume">
										<span>
											{{ input.name }}
										</span>

										<span class="min-max-input-value">
											{{ values[key].value }}{{ input.multiplier == 1000 ? 'k' : '' }}
										</span></label>
									<input type="range" :id="`input-${key}`" :name="`input-${key}`" :min="input.min"
										:max="input.max" :step="input.step" v-model="values[key].value"
										@input="countTotal" />

									<span class="min-max-input-value">
										{{ values[key].value }}{{ input.multiplier == 1000 ? 'k' : '' }}
									</span>
								</div>
							</div>

						</div>
						<div v-if="values.length" class="price-calculator-inputs">
							<div class="price-calculator-second-inputs">
								<div v-for="(input, key) in inputs" :key="key + values.length"
									class="price-calculator-input">
									<div v-if="input.value == 'boolean'" class="boolean-input">
										<span>{{ input.name }}</span>

										<input type="checkbox" :id="`input-${key}`" :name="`input-${key}`" :min="input.min"
											:max="input.max" step="1" v-model="values[key].value" @change="countTotal" />
										<label :for="`input-${key}`">
											<span></span>
										</label>
									</div>
								</div>
							</div>

						</div>

						<div class="price-calculator-total">
							<span>Total price :</span> <span>{{ totalPrice }} $</span>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-4">
					<div class="price-calculator-image">
						<img src="@/assets/backgrounds/calculator-back.png" alt="">
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
let title = require('/info.config.json').title.calculator
let inputs = require('/info.config.json').calculator

export default {
	name: "PriceCalculator",
	data() {
		return {
			title: title,
			inputs: inputs,
			values: [],
			totalPrice: 0
		}
	},
	methods: {
		countTotal() {
			this.totalPrice = 0
			this.values.forEach(element => {
				if (element.step) {
					this.totalPrice += element.value * element.price
				} else {
					if (element.value == true) this.totalPrice += Number(element.price)
				}
			});

		}
	},
	mounted() {
		for (const key in inputs) {
			if (Object.hasOwnProperty.call(inputs, key)) {
				if (inputs[key].value == "min-max") {
					this.values.push({
						name: inputs[key].name,
						price: inputs[key].price,
						value: inputs[key].step,
						step: 1
					})
				} else if (inputs[key].value == "boolean") {
					this.values.push({
						name: inputs[key].name,
						price: inputs[key].price,
						value: false,
					})
				}
			}
		}

		this.countTotal()

	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.main-row {
	@media (max-width: 991px) {
		flex-direction: column-reverse;
	}
}

.price-calculator {
	background-color: $white;
	box-shadow: 0 0 50px 1px $main-theme-color;
	border-radius: 50px;
	margin: -50px 0;
	position: relative;
	padding: 80px 0 100px 0;
	z-index: 2;

	@media (max-width: 575px) {
		border-radius: 25px;
	}

	&-title {
		@include title;
	}

	&-image {
		position: relative;
		z-index: 1;
		margin-left: -250px;
		width: calc(100% + 550px);
		height: 100%;

		@media (max-width: 991px) {
			margin-left: 0;
			width: 100%;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			opacity: 0.75;
		}
	}



	&-board {
		@include blur-effect;
		padding: 0px;
		border: none;
		overflow: hidden;
		position: relative;
		z-index: 2;
		height: 100%;
		box-shadow: 0px 0px 20px 1px rgba($color: $main-theme-color, $alpha: 0.5);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		// border-left: 5px solid rgba($color: $blue, $alpha: 0.2);
		// border-right: 5px solid rgba($color: $blue, $alpha: 0.2);

		@media (max-width: 767px) {
			border: 5px solid rgba($color: $blue, $alpha: 0.2);
		}

		.top {
			border-bottom: 1px solid $main-theme-color;
		}
	}


	&-text {
		color: $main-theme-color;
		position: relative;
		margin-bottom: 70px;
		padding: 30px;
		box-shadow: 0px 0px 20px 1px rgba($color: $main-theme-color, $alpha: 0.5);
		background-color: rgba($color: $blue, $alpha: 0.2);

		@media (max-width: 767px) {
			display: none;
		}
	}

	&-inputs {
		padding: 15px 40px;

		@media (max-width: 767px) {
			padding: 15px 0;
		}

		.price-calculator-second-inputs {
			padding: 15px;
			border-radius: 20px;
			box-shadow: 0 0 10px 1px rgba($color: $blue, $alpha: 0.1);
			padding-top: -30px;

			.price-calculator-input:not(:last-child) .boolean-input {
				margin-bottom: 30px;
			}
		}
	}

	&-input {}

	.min-max-input {
		display: flex;
		margin-bottom: 20px;
		display: flex;
		align-items: center;

		// border: 1px solid $main-theme-color;
		padding: 15px;
		border-radius: 50px;
		box-shadow: 0 0 10px 1px rgba($color: $blue, $alpha: 0.1);

		&-value {
			min-width: 50px;
			display: inline-block;
			margin-left: 25px;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			border: 1px solid $main-theme-color;
			text-align: right;
			color: $main-theme-color;
			letter-spacing: 1px;
			font-weight: 600;
			font-size: 16px;
		}

		label {
			span:first-child {
				min-width: 250px;
				display: inline-block;
				color: $main-theme-color;
				letter-spacing: 1px;
				font-weight: 600;
			}

			span:last-child {
				display: none;
			}
		}

		input {
			width: 100%;
			background: transparent;
			-webkit-appearance: none;
			transition: 0.3s ease-in-out all;

			&::-webkit-slider-runnable-track {
				background: rgba($color: $pink, $alpha: 0.5);
				background: linear-gradient(90deg, rgba($color: $blue, $alpha: 0.5) 0%, rgba($color: $pink, $alpha: 0.5) 100%, );
				// border: 1px solid $blue;
				border-radius: 15px;
				height: 20px;
				transition: 0.3s ease-in-out all;
			}

			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				height: 36px;
				width: 36px;
				border-radius: 50%;
				background: rgba($color: #df59ac, $alpha: 1);
				cursor: pointer;
				// border: 1px solid rgb(126, 0, 128);
				margin-top: -8px;
				// box-shadow: 0px 0px 5px 1px rgba($color: $blue, $alpha: 0.5);
				// border: 2px solid $main-theme-color ;
				transition: 0.3s ease-in-out all;
				position: relative;

				&::after {
					content: 'text';
					position: absolute;
					z-index: 2;
					width: 50px;
					height: 50px;
					top: 0;
					left: 0;
					background-color: red;
				}
			}
		}

		@media (max-width: 767px) {
			flex-direction: column;
			border-radius: 15px;
			align-items: flex-start;
			padding-bottom: 35px;

			label {
				margin-bottom: 25px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				flex-wrap: wrap;

				span:first-child {
					min-width: fit-content;
				}

				span:last-child {
					display: flex;
				}
			}

			.min-max-input-value {
				display: none;
			}
		}
	}

	.boolean-input {
		display: flex;
		align-items: center;
		width: 100%;

		@media (max-width: 767px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}

		&>span {
			display: inline-block;
			min-width: 300px;
			color: $main-theme-color;
			letter-spacing: 1px;
			font-weight: 600;

			@media (max-width: 991px) {
				word-wrap: break-word;
			}
		}

		label {
			width: 75px;
			height: 35px;
			background-color: #8784ff;
			border-radius: 50px;
			position: relative;
			transition: 0.3s ease-in-out all;
			cursor: pointer;

			// &::before {
			// 	content: '';
			// 	background: url('../assets/tick.png');
			// 	background-size: 100%;
			// 	position: absolute;
			// 	top: 10px;
			// 	left: 14px;
			// 	width: 14px;
			// 	height: 14px;
			// 	opacity: 0.6;
			// }

			// &::after {
			// 	content: '';
			// 	background: url('../assets/close.png');
			// 	background-size: 100%;
			// 	position: absolute;
			// 	top: 10px;
			// 	right: 14px;
			// 	width: 14px;
			// 	height: 14px;
			// 	opacity: 0.6;
			// }

			span {
				display: inline-block;
				width: 33px;
				height: 33px;
				background-color: #df59ac;
				border-radius: 50%;
				transition: 0.3s ease-in-out all;
				position: relative;
				top: 1px;
				left: 1px;
				z-index: 5;
			}
		}

		input {
			display: none;
		}

		input:checked+label {
			background-color: #f764bf;
		}

		input:checked+label span {
			left: 41px;
			background-color: $pink;
		}
	}

	&-total {
		color: $main-theme-color;
		position: relative;
		margin-top: 30px;
		padding: 50px 30px;
		box-shadow: 0px 0px 20px 1px rgba($color: $main-theme-color, $alpha: 0.5);
		background-color: rgba($color: $blue, $alpha: 0.2);
		text-align: right;
		font-weight: 800;
		font-size: 35px;

		span {
			font-size: 35px;
			color: $main-theme-color;
		}

		span:last-child {

			margin-left: 30px;
		}

		@media (max-width: 767px) {
			text-align: center;

			span:first-child {
				display: none;
			}

			span:last-child {

				margin-left: 0px;
			}
		}
	}
}
</style>