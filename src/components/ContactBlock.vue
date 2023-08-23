<template>
	<div class="contact-block theme-block">
		<div class="container">
			<div class="contact-wrapper">
				<div class="contact-wrapper-contacts">
					<div v-for="(con, key) in contact" :key="key" class="contact-wrapper-contacts-card">
						<div class="contact-wrapper-contacts-card-image">
							<svg v-if="con.label == 'Phone'" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
								fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
								<path
									d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
							</svg>

							<svg v-if="con.label == 'E-mail'" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
								fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
								<path
									d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
							</svg>
						</div>
						<div class="contact-wrapper-contacts-card-label">
							{{ con.label }}
						</div>
						<div class="contact-wrapper-contacts-card-data">
							{{ con.data }}
						</div>
					</div>
				</div>
				<div class="row main-row">
					<div class="col-12 col-lg-6">
						<form @submit.prevent="sendEmail()">
							<div class="input-wrapper">
								<label for="email-input">Email</label>
								<input type="email" name="email" id="email-input" placeholder="Enter a valid email address">
							</div>
							<div class="input-wrapper">
								<label for="name-input">Name</label>
								<input type="text" name="name" id="name-input" placeholder="Enter your name">
							</div>
							<div class="input-wrapper">
								<label for="message">Message</label>
								<textarea name="message" id="message" placeholder="Enter your message"></textarea>
							</div>

							<button type="submit">Send a message</button>
						</form>
					</div>
					<div class="col-12 col-lg-6">
						<div class="info-wrapper">
							<div class="title">{{ blockInfo.title }}</div>
							<div class="text">
								<p>{{ blockInfo.text_par_1 }}</p>
								<p>{{ blockInfo.text_par_2 }}</p>
							</div>
							<div class="social-media">
								<div v-for="(item, key) in socialMedia" :key="key" class="social-media-item">
									<a :href="item.data">
										<svg v-if="item.icon == 'telegram'" xmlns="http://www.w3.org/2000/svg" width="16"
											height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
										</svg>
										<svg v-if="item.icon == 'whatsapp'" xmlns="http://www.w3.org/2000/svg" width="16"
											height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
											<path
												d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
										</svg>
										<svg v-if="item.icon == 'gmail'" xmlns="http://www.w3.org/2000/svg" width="16"
											height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
											<path
												d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
										</svg>
									</a>
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
let contact = require('/info.config.json').contact
let socialMedia = require('/info.config.json').social_media
let blockInfo = require('/info.config.json').contact_block
export default {
	name: "ContactBlock",
	data() {
		return {
			contact,
			socialMedia,
			blockInfo
		}
	},
	methods: {
		sendEmail(data) {
			console.log(data)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.contact-block {
	padding: 150px 0 !important;
	background: linear-gradient(0deg, rgba($color: $blue, $alpha: 0.3) 0%, rgba($color: $pink, $alpha: 0.3) 100%);

	.contact-wrapper {
		@include blur-effect;
		padding-top: 120px;
		position: relative;

		&-contacts {
			position: absolute;
			transform: translateX(-50%);
			left: 50%;
			top: -50px;

			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;
			flex-wrap: wrap;

			@media (max-width: 991px) {
				flex-wrap: nowrap;
			}

			@media (max-width: 767px) {
				position: relative;
				transform: translateX(0);
				left: 0;
				top: 0;
				margin-bottom: 50px;
				justify-content: flex-start;
				flex-wrap: wrap;
			}

			&-card {
				background: linear-gradient(70deg, rgba($color: $pink, $alpha: 1) 10%, rgba($color: $blue, $alpha: 1) 100%);
				padding: 20px 25px;
				border-radius: 10px;
				opacity: 1;
				display: flex;
				flex-direction: column;
				align-items: center;

				@media (max-width: 530px) {
					width: 100%;
					word-break: break-all;
					text-align: center;
				}

				&-image {
					margin-bottom: 20px;

					svg {
						width: 35px;
						height: 35px;
					}

				}

				&-label {}

				&-data {}
			}
		}

		.main-row {
			row-gap: 50px;

			.col-12 {
				padding: 0 20px !important;
			}
		}

		.input-wrapper {
			display: flex;
			flex-direction: column;

			label {
				font-weight: 500;
			}

			input,
			textarea {
				background-color: transparent;
				border-bottom: 2px solid #fff;
				padding: 10px;
				resize: none;

				&::placeholder {
					color: rgba($color: #fff, $alpha: 0.5);
				}
			}

			textarea {
				height: 100px;
			}

			margin-bottom: 20px;
		}

		button {
			@include theme-btn;
			width: 100%;
		}

		.info-wrapper {
			.title {
				font-size: 25px;
				font-weight: 600;
				letter-spacing: 2px;
				margin-bottom: 25px;

				@media (max-width: 991px) {
					display: none;
				}
			}

			.text {
				display: flex;
				flex-direction: column;
				gap: 15px;

				p:first-child {
					font-style: italic;
					font-weight: 500;
				}

				margin-bottom: 40px;

				@media (max-width: 991px) {
					display: none;
				}
			}

			.social-media {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 30px;

				&-item {
					svg {
						width: 35px;
						height: 35px;
					}
				}
			}
		}
	}
}
</style>