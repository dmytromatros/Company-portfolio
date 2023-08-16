<template>
	<div class="footer-component theme-block">
		<div class="wrapper">
			<div class="container">
				<div class="row" style="row-gap: 30px;">
					<div class="col-12 col-md-6 col-lg-3">
						<div class="logo-container">
							<a href="#">
								<!-- <img src="" alt=""> -->
								My Logo Name
							</a>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-3">
						<ul id="menu">
							<li v-for="(item, key) in menu" :key="key">
								<router-link :to="item.link">{{item.label}}</router-link>
							</li>
						</ul>
					</div>
					<div class="col-12 col-md-6 col-lg-3">
						<div class="contact">
							<div v-for="(item, key) in contact" :key="key" v class="contact-item">
								<div class="contact-item-label">
									{{ item.label }} :
								</div>
								<div class="contact-item-data">
									{{ item.data }}
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-3">
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
					<div class="col-12">
						<span class="copyright">{{ copyright }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
let menu = require('/info.config.json').menu
let contact = require('/info.config.json').contact
let socialMedia = require('/info.config.json').social_media
let copyright = require('/info.config.json').copyright

export default {
	name: "FooterComponent",
	data() {
		return {
			menu: menu,
			contact: contact,
			socialMedia: socialMedia,
			copyright: copyright
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.footer-component {
	padding-top: 100px !important;
	padding-bottom: 0 !important;
	background: linear-gradient(0deg, rgba($color: $pink, $alpha: 0.3) 10%, rgba($color: $blue, $alpha: 0.3) 100%);		

	.wrapper {
		@include blur-effect;
		border-radius: 0;
		padding: 70px 0;

		#menu {
			@media (max-width: 991px) {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
			}

			@media (max-width: 767px) {
				align-items: start;
			}

			li {
				margin-bottom: 15px;
				font-weight: 500;
				transition: 0.3s ease-in-out all;

				&:hover {
					opacity: 0.7;
				}
			}
		}

		.contact {


			&-item {
				font-weight: 600;
				margin-bottom: 30px;

				&-label {}

				&-data {
					padding-left: 15px;
				}
			}
		}

		.social-media {
			display: flex;
			flex-direction: column;
			align-items: center;
			@media (max-width: 767px) {
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 50px;
			}

			&-item {

				svg {
					width: 30px;
					height: 30px;
				}

				margin-bottom: 35px;
			}
		}

		.copyright {
			margin-top: 70px;
			display: block;
			text-align: center;
			color: $label-text;
			font-weight: 500;
		}
	}
}
</style>