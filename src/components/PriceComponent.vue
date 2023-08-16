<template>
	<div class="price-component theme-block">
		<div class="container">
			<div class="price-text">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto tempora doloremque reprehenderit
				saepe voluptatem rem sint. Expedita saepe itaque esse ea eos at ad placeat, voluptatum iure, non veniam
				cupiditate corrupti! Quas suscipit explicabo fugiat facilis ut dignissimos facere odit neque non distinctio
				vel eius, animi, consequuntur ad quia.
			</div>

			<div class="prise-wrapper">

				<vue-masonry-wall :items="types" :options="{ width: 400, padding: 12 }">
					<template v-slot:default="{ item }">
						<div class="type-item">
							<div class="type-item-price-name">
								<div class="type-item-name">{{ item.type }}</div>
								<div class="type-item-price">{{ item.price }}</div>
								<div class="type-item-label">Per project</div>
							</div>

							<div class="type-item-description">
								{{ item.explanation }}
							</div>

							<button class="type-item-button">Contact us</button>
						</div>
					</template>
				</vue-masonry-wall>

				<div class="phases">
					<div class="phase-item" v-for="(phase, key) in phases" :key="key">
						<div>
							<b-button class="phase-item-name" v-b-toggle="`collapse-${key}`">
								<div class="phase-item-name-name">{{ phase.type }}</div>
								<div class="phase-item-name-price">
									<span>{{ phase.price }}</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										class="bi bi-caret-down-fill" viewBox="0 0 16 16">
										<path
											d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
									</svg>
								</div>
							</b-button>
							<b-collapse class="phase-item-content" :id="`collapse-${key}`">
								<b-card>
									<p v-if="phase.explanation" class="card-text">{{ phase.explanation }}</p>
									<div v-if="phase.options" class="card-text">
										<ul>
											<li v-for="(item, key1) in phase.options" :key="key1">
												<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
													fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
													<path
														d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
												</svg>
												<span>{{ item }}</span>
											</li>
										</ul>
									</div>
								</b-card>
							</b-collapse>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

let title = require('/info.config.json').title.price

let price = require('/info.config.json').price
import VueMasonryWall from "vue-masonry-wall";

export default {
	name: "PriceComponent",
	components: { VueMasonryWall },
	data() {
		return {
			title: title,
			phases: [],
			types: [],
		}
	},
	mounted() {
		if (Object.keys(price.phases).length) {
			for (const key in price.phases) {
				if (Object.hasOwnProperty.call(price.phases, key)) {
					this.phases.push(price.phases[key])

				}
			}
		}

		if (Object.keys(price.types).length) {
			for (const key in price.types) {
				if (Object.hasOwnProperty.call(price.types, key)) {
					this.types.push(price.types[key])

				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.price-component {
	padding: 150px 0 200px 0 !important;
	background: linear-gradient(0deg,rgba($color: $blue, $alpha: 0.3) 0%, rgba($color: $blue, $alpha: 0.3) 100%);

	.price-text {
		margin-bottom: 150px;
		font-size: 18px;
		font-weight: 500;
		@include blur-effect;
	}

	.type-item {
		@include blur-effect;
		padding: 35px;
		padding-top: 0px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 70px;

		&-price-name {
			margin-top: -70px;
			background: linear-gradient(70deg, rgba($color: $pink, $alpha: 1) 10%, rgba($color: $blue, $alpha: 1) 100%);
			padding: 25px;
			border-radius: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 300px;
			margin-bottom: 25px;
		}

		&-price {
			font-size: 30px;
			font-weight: 700;
			margin-bottom: 15px;
		}

		&-name {
			text-align: center;
			font-weight: 600;

		}

		&-description {
			margin-bottom: 25px;
		}

		&-button {
			@include theme-btn-active;
			background: linear-gradient(70deg, rgba($color: $pink, $alpha: 0.8) 10%, rgba($color: $blue, $alpha: 0.8) 100%);
		}
	}

	.phases {
		@include blur-effect;

		.phase-item {
			&-name {
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding: 20px 30px;
				border-radius: 0;
				background-color: transparent;
				font-weight: 600;
				font-size: 24px;

				&-name {}

				&-price {
					display: flex;
					align-items: center;
					gap: 30px;
				}
			}

			&-content {
				.card {
					background-color: transparent;

					&-text {
						padding: 20px 30px;

						ul {
							li {
								display: flex;
								gap: 15px;
								margin-bottom: 15px;
								align-items: center;
							}
						}

						svg {
							min-width: 30px;
							min-height: 30px;
						}
					}
				}
			}
		}

	}

}</style>