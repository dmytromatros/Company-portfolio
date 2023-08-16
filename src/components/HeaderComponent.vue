<template>
	<div class="header-component">
		<div class="container">
			<div class="header-component-inner">
				<div class="header-component-logo">
					<a href="#">
						<!-- <img src="" alt=""> -->
						My Logo Name
					</a>
				</div>

				<div class="header-component-links ">
					<div class="container">
						<ul>
							<li class="header-component-links-link" v-for="(item, key) in menuItems" :key="key">
								<router-link :to="item.link" :replace="true">{{item.label}}</router-link>
							</li>
						</ul>
					</div>

				</div>

				<button class="burger-button" @click="toggleBurger">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
						viewBox="0 0 16 16">
						<path fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>


<script>

let menu = require('/info.config.json').menu

export default {
	name: 'HeaderComponent',
	data() {
		return {
			menuItems: menu
		}
	},
	components: {
	},
	methods:{
		toggleBurger(){
			document.querySelector('.header-component-links').classList.toggle('opened-burger')
			document.querySelector('.header-component').classList.toggle('colored-header')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.header-component {
	position: absolute;
	transition: 0.3s ease-in-out all;
	z-index: 999999;
	width: 100%;
	left: 0;
	top: 0;
	background-color: rgba($color: $text-color, $alpha: 0.1);
	backdrop-filter: blur(5px);
	// box-shadow: 0 5px 5px 5px rgba($color: $text-color, $alpha: 0.1);

	&-inner {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 30px 0;
	}

	.burger-button {
		display: none;
		width: 30px;
		height: 30px;
		background-color: transparent;

		svg {
			fill: $text-color;
			width: 30px;
			height: 30px;
		}
	}

	&-logo {}

	&-links {
		ul {
			display: flex;
			gap: 20px;
		}

		&-link {
			a {
				font-weight: 500;
				transition: 0.3s ease-in-out all;
			}

			&:hover {
				a {
					opacity: 0.8;
				}
			}
		}
	}
}

@media (max-width: 767px) {
	.header-component-inner{
		padding: 30px 0px;
	}
	.burger-button {
		display: block !important;
	}

	.header-component-links {
		position: absolute;
		left: 0;
		width: 100%;
		
		padding-left: 20px;
		padding-right: 20px;
		height: 0;
		overflow: hidden;
		opacity: 0;
		bottom: 0;
		transition: 0.3s ease-in-out all;
		background: linear-gradient(180deg, rgba($color: $background, $alpha: 1) 50%, rgba(255,37,37,0) 100%);
		
		ul {
			flex-direction: column;

			li {
				text-align: left;
			}
		}
	}
	.opened-burger{
		height: 370px;
		opacity: 1;
		bottom: -370px;
		padding: 20px;
		transition: 0.3s ease-in-out all;
	}
}

@media (max-width: 575px) {
	.header-component-inner{
		padding: 30px 20px;
	}
}

.colored-header{
	transition: 0.3s ease-in-out all;
	background-color: rgba($color: $background, $alpha: 1);
	backdrop-filter: none;
}

</style>