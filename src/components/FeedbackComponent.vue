<template>
	<div class="feedback-component theme-block">
		<div class="container">

			<div class="feedbacks-title">
				{{ title }}
			</div>

			<vue-masonry-wall :items="feedbacks" :options="{ width: 400, padding: 12 }">
				<template v-slot:default="{ item }">
					<div class="feedback-container">
						<div class="feedback-item">
							<div class="feedback-item-name">
								{{ item.name }}
							</div>
							<p class="feedback-item-text">
								{{ item.feedback }}
							</p>
							<div class="feedback-item-date">
								{{ convertData(item.date) }}
							</div>
						</div>
					</div>
				</template>
			</vue-masonry-wall>
		</div>
	</div>
</template>

<script>

let feedbacks = require('/info.config.json').feedbacks
let title = require('/info.config.json').title.feedback


import VueMasonryWall from "vue-masonry-wall";
export default {
	name: "FeedbackComponent",
	components: { VueMasonryWall },
	data() {
		return {
			feedbacks: [],
			title: title
		}
	},
	methods: {
		convertData(inputDate) {
			const dateObj = new Date(inputDate);

			const day = dateObj.getDate().toString().padStart(2, '0');
			const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
			const year = dateObj.getFullYear().toString().slice(-2);

			const formattedDate = `${day}.${month}.${year}`;
			const formattedTime = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

			return `${formattedDate} ${formattedTime}`;
		}
	},
	mounted() {
		if (Object.keys(feedbacks).length) {
			for (const key in feedbacks) {
				if (Object.hasOwnProperty.call(feedbacks, key)) {
					this.feedbacks.push(feedbacks[key])

				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

.feedback-component {
	padding-bottom: 150px;
	background: linear-gradient(0deg, rgba($color: $pink, $alpha: 0.3) 10%, rgba($color: $blue, $alpha: 0.3) 100%);

	.feedbacks-title {
		@include left-title;
		margin: 50px;

		@media (max-width: 991px) {
			margin: 50px 0;
		}
	}

	.feedback-container {
		margin-bottom: 0px;

		.feedback-item {
			clip-path: polygon(0 0, 100% 0, 100% 89%, 9% 89%, 0 100%, 0 75%, 0% 75%);
			width: fit-content;
			height: fit-content;
			// background-color: red;
			@include blur-effect;
			padding: 20px;
			padding-bottom: 70px !important;
			border-radius: 10px;

			&-name {
				font-weight: 700;
				margin-bottom: 15px;
				font-size: 20px;
			}

			&-text {
				margin-bottom: 20px;
			}

			&-date {
				color: $label-text;
			}
		}
	}


}
</style>
