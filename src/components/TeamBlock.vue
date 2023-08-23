<template>
	<div class="about-company-block theme-block">
		<div class="container">
			<div class="about-company-inner">

				<div class="about-company-small-text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae odio assumenda ipsam, maxime non
					mollitia atque sunt! Veniam accusantium alias omnis consequatur aspernatur voluptate, labore provident a
					error nesciunt iure modi commodi debitis aut officiis illo necessitatibus praesentium reprehenderit
					impedit. Minima alias vero illum porro aliquid quo officiis voluptas accusantium!
				</div>

				<div class="team-list" v-if="Object.keys(team).length > 1">



					<slick ref="slick" :options="slickOptions">
						<div v-for="(person, key) in team" :key="key">
							<div class="person-wrapper" @click="selectPerson(key)"
								:class="{ 'active': selectedPersonNumber == Number(key) }">
								<img :src="`https://static.vecteezy.com/system/resources/previews/009/379/900/original/woman-face-expression-clipart-design-illustration-free-png.png`"
									:alt="person.name">
								<div class="person-info">
									<div class="name">{{ person.name }}</div>
									<div class="position">{{ person.position }}</div>
								</div>
							</div>
						</div>
					</slick>
					<div class="team-list-arrows">
						<div v-if="Object.keys(team).length > 3" class="slider__arrow" @click="prev">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
								class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</div>

						<div v-if="Object.keys(team).length > 3" class="slider__arrow" @click="next">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
								class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="company-team">
					<div v-for="(person, key) in teamSelected" :key="key" class="company-team-item">
						<div class="row item-row">
							<div class="col-lg-6 col-12 info-col">
								<div class="person-info">
									<div class="person-name">{{ person.name }}</div>
									<div class="person-base-info">{{ person.baseInfo }}</div>
									<div class="person-large-info">
										<p v-for="(par, key1) in splitTextIntoParagraphs(person.largeInfo)" :key="key1">
											{{ par }}
										</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-12 image-col">
								<div class="person-image">
									<img :src="`https://static.vecteezy.com/system/resources/previews/009/379/900/original/woman-face-expression-clipart-design-illustration-free-png.png`"
										:alt="person.name">
								</div>
							</div>
						</div>

						<div class="navigate-buttons">
							<div class="row">
								<div v-for="(button, key) in navigateButtons" :key="key" class="col-12 col-lg-4 button-col">
									<button @click="button.action" class="navigate-button"
										:class="[{ active: tab == button.tab }]">
										{{ button.label }}
									</button>
								</div>
							</div>

						</div>

						<div class="main-info">
							<div class="main-info-tab technologies" v-show="tab == 'technologies'">
								<div class="row">
									<div v-for="(col, key1) in computedMainInfo(person.tabs.skills)" :key="key1"
										class="col-12 col-md-4 main-info-col">
										<div v-for="(item, key2) in col" :key="key2" class="one-col-item">
											<div class="circle">
												<span>{{ item.knowledge }}</span>
												<svg id="cut-circ">
													<circle cx="35" cy="35" r="20" transform="rotate(-90 25 35)"
														:style="`stroke-dashoffset: 315`" />
													<circle cx="35" cy="35" r="20" transform="rotate(-90 25 35)"
														:style="`stroke-dashoffset: -${calcRadius(item.knowledge)};`" />
												</svg>
											</div>

											<div class="name">
												{{ item.skillName }}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="main-info-tab experience" v-show="tab == 'experience'">
								<div class="row">
									<div v-for="(col, key1) in computedMainInfo(person.tabs.experience)" :key="key1"
										class="col-12 col-md-4 main-info-col">
										<div v-for="(item, key2) in col" :key="key2" class="one-col-item">
											<div class="circle">
												<span>{{ item.period }}</span>
												<svg id="cut-circ">
													<circle cx="35" cy="35" r="20" transform="rotate(-90 25 35)"
														:style="`stroke-dashoffset: 315`" />
													<circle cx="35" cy="35" r="20" transform="rotate(-90 25 35)"
														:style="`stroke-dashoffset: -${calcRadius(item.period * 100 / 5)};`" />
												</svg>
											</div>

											<div class="name">
												{{ item.companyName }}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="main-info-tab education" v-show="tab == 'education'">
								<div class="row">
									<div v-for="(col, key1) in computedMainInfo(person.tabs.education)" :key="key1"
										class="col-12 col-md-4 main-info-col">
										<div v-for="(item, key2) in col" :key="key2" class="one-col-item">
											<div class="circle">
												<span>{{ item.period }}</span>
												<svg id="cut-circ">
													<circle cx="35" cy="35" r="20" transform="rotate(-90 25 35)"
														:style="`stroke-dashoffset: 315`" />
													<circle cx="35" cy="35" r="20" transform="rotate(-90 25 35)"
														:style="`stroke-dashoffset: -${calcRadius(item.period * 100 / item.period)};`" />
												</svg>
											</div>

											<div class="name">
												<div class="education-name-place">{{ item.place }}</div>
												<div v-show="item.degree" class="education-name-degree">{{ item.degree }}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'

let team = require('/info.config.json').team

export default {
	name: 'TeamBlock',
	data() {
		return {
			team: team,
			tab: 'technologies',
			navigateButtons: [
				{
					label: 'Key technologies',
					tab: 'technologies',
					action: () => { this.tab = 'technologies' }
				},
				{
					label: 'Work experience',
					tab: 'experience',
					action: () => { this.tab = 'experience' }
				},
				{
					label: 'Education',
					tab: 'education',
					action: () => { this.tab = 'education' }
				}
			],
			teamSelected: [],
			selectedPersonNumber: 0,
			slickOptions: {
				slidesToShow: 3,
				arrows: false,
				autoplay: false,
				swipeToSlide: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
						},
					},
					{
						breakpoint: 991,
						swipeToSlide: true,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 768,
						swipeToSlide: true,
						settings: {
							autoplay: false,
							autoplaySpeed: 2000,
							slidesToShow: 1,
						},
					},
					{
						breakpoint: 480,
						swipeToSlide: true,
						settings: {
							autoplay: false,
							autoplaySpeed: 2000,
							slidesToShow: 1,
						},
					},
				],
			},
		}
	},
	components: {
		Slick
	},
	methods: {
		computedMainInfo(arr) {
			const totalObjects = arr.length;
			const levelSize = Math.ceil(totalObjects / 3);

			const levels = [];
			for (let i = 0; i < totalObjects; i += levelSize) {
				levels.push(arr.slice(i, i + levelSize));
			}

			return levels;
		},
		splitTextIntoParagraphs(text) {
			const sentences = text.match(/[^.!?]+[.!?]+/g);
			if (!sentences) return [];

			const totalSentences = sentences.length;
			const middleSentenceIndex = Math.ceil(totalSentences / 2);

			const firstParagraph = sentences.slice(0, middleSentenceIndex).join(' ');
			const secondParagraph = sentences.slice(middleSentenceIndex).join(' ');

			return [firstParagraph, secondParagraph];
		},
		calcRadius(angle) {
			return (251 - (angle * 251 / 100)) / 2
		},
		selectPerson(key) {
			this.selectedPersonNumber = key
			this.teamSelected = []
			this.teamSelected.push(team[this.selectedPersonNumber])
		},
		next() {
			this.$refs.slick.next();
		},

		prev() {
			this.$refs.slick.prev();
		},
	},
	mounted() {
		if (Object.keys(team).length) this.teamSelected.push(team[this.selectedPersonNumber])
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.about-company-block {
	padding: 150px 0 250px 0 !important;
	background: linear-gradient(0deg, rgba($color: $blue, $alpha: 0.3) 0%, rgba($color: $pink, $alpha: 0.3) 50%, rgba($color: $blue, $alpha: 0.3) 100%);

	.about-company-inner {
		.about-company-small-text {
			margin-bottom: 50px;
			font-size: 18px;
			font-weight: 500;
			@include blur-effect;
		}

		.team-list {
			margin-bottom: 50px;

			.col-12 {
				padding: 0 15px;
			}

			.row {
				row-gap: 30px;
			}

			.person-wrapper {
				width: 100%;
				@include blur-effect;
				padding: 20px 20px;
				cursor: pointer;

				img {
					width: 100%;
					height: 250px;
					object-fit: contain;
				}

				.name {
					font-weight: 700;
					font-size: 25px;
				}

				.position {
					color: $label-text;
				}
			}

			.active {
				background: linear-gradient(70deg, rgba($color: $pink, $alpha: 0.5) 10%, rgba($color: $blue, $alpha: 0.5) 100%);
			}
		}

		.company-team {
			&-item {
				.item-row {
					align-items: center;
					align-items: stretch;
					row-gap: 50px;

					@media (max-width: 991px) {
						flex-direction: column-reverse;
					}

					.info-col {
						@media (min-width: 991px) {
							padding-right: 30px;
						}
					}

					.image-col {
						@media (min-width: 991px) {
							padding-left: 30px;
						}
					}
				}

				.person-info {
					@include blur-effect;
					height: 100%;

					@media (max-width: 1200px) {
						padding: 25px;
					}

					.person-name {
						font-size: 40px;
						line-height: 50px;
						font-weight: 600;
						margin-bottom: 10px;
					}

					.person-base-info {
						margin-bottom: 25px;
					}

					.person-large-info {
						display: flex;
						flex-direction: column;
						gap: 20px;

						p {
							line-height: 26px;
							letter-spacing: 1px;
						}
					}
				}

				.person-image {
					@include blur-effect;
					min-height: 100%;

					img {
						width: 100%;
						max-height: 500px;
						object-fit: contain;
					}
				}
			}
		}

		.navigate-buttons {
			// display: flex;
			// flex-wrap: wrap;
			// justify-content: space-around;
			margin: 50px 0;

			.row {
				row-gap: 15px;
			}

			.button-col {
				// display: flex;
				// justify-content: center;


				@media (min-width: 991px) {
					padding-left: 25px;
				}
			}

			.navigate-button {
				@include theme-btn;
				min-width: 250px;
				transition: 0.3s all ease-in-out;

				@media (max-width: 991px) {
					width: 100%;
				}
			}

			.active {
				@include theme-btn-active;
				min-width: 250px;
				transition: 0.3s all ease-in-out
			}
		}

		.main-info {
			@include blur-effect;
			padding: 35px 0;

			.main-info-tab {
				width: 100%;

				.row {
					width: 100%;

					.main-info-col {
						padding: 0 25px;

						#cut-circ {
							width: 50px;
							height: 50px;

							circle {
								stroke-dasharray: 440;
								stroke-width: 8px;
								fill: transparent;
								stroke: #6ef970;
								position: relative;
								// stroke-linecap: round;
								z-index: 2;

								&:first-child {
									stroke: rgba($color: $text-color, $alpha: 0.2);
									stroke-dasharray: 440;
									position: relative;
									z-index: 1;
								}
							}
						}

						.one-col-item {
							display: flex;
							align-items: center;
							margin-bottom: 25px;
							gap: 20px;

							.circle {
								position: relative;
								display: flex;
								align-items: center;
								justify-content: center;

								span {
									position: absolute;
								}
							}
						}

						.education-name-place {}

						.education-name-degree {
							font-size: 12px;
							color: $label-text;
						}
					}
				}
			}
		}
	}
}

.team-list-arrows {
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 350px;
	margin: auto;
	margin-top: 50px;

	@media (max-width: 768px) {
		padding: 0 25px;
		max-width: 100%;
	}

	.slider__arrow:first-child {
		transform: rotate(180deg);
	}

	.slider__arrow {
		@include gradient;
		border-radius: 50%;
		padding: 15px;
		cursor: pointer;
		transition: 0.3s ease-in-out all;

		&:hover {
			opacity: 0.8;
		}
	}
}

::v-deep {
	.slick-slide {
		padding: 15px;

		@media (max-width: 768px) {
			padding: 10px;
		}
	}
}
</style>
