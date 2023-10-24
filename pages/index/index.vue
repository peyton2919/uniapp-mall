<template>
	<view>
	
			<!-- 轮播图组件  circular 是否循环 -->
			<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular>
				<block v-for="(item,index) in swipers" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<image :src="item.src" lazy-load 
								class="img-h-350"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[
					{src:'/static/images/demo/demo4.png'},
					{src:'/static/images/demo/demo1.jpg'},
					{src:'/static/images/demo/demo2.jpg'}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
