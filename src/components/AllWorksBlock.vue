<template>
	<div class="all-works theme-block">
		<div class="container">
			<vue-masonry-wall :items="works" :options="{ width: 600, padding: 12 }">
				<template v-slot:default="{ item }">
					<div class="work-container">
						<div class="work-item">
							<div class="work-item-image">
								<img :src="item.image" alt="">
							</div>
							<div class="work-item-name">
								{{ item.name }}
							</div>
							<p class="work-item-text">
								{{ item.text }}
							</p>
							<div class="work-item-date">
								<a :href="item.link">{{ item.linkText }}</a>
							</div>
						</div>
					</div>
				</template>
			</vue-masonry-wall>
		</div>
	</div>
</template>

<script>
let works = require('/info.config.json').works

import VueMasonryWall from "vue-masonry-wall";
export default {
	name: "AllWorksBlock",
	components: {
		VueMasonryWall
	},
	data(){
		return{
			works: []
		}
	},
	mounted() {
		if (Object.keys(works).length) {
			for (const key in works) {
				if (Object.hasOwnProperty.call(works, key)) {
					this.works.push(works[key])
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.all-works{
	background: linear-gradient(0deg,rgba($color: $blue, $alpha: 0.3) 0%, rgba($color: $pink, $alpha: 0.3) 100%);
	.work-container{
		.work-item{
			@include blur-effect;
			&-image{
				width: 100%;
				height: 250px;
				img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>