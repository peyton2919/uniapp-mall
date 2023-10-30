<template>
	<view>
		<!-- 轮播图组件  circular 是否循环 -->
		<swiper indicator-dots autoplay :interval="3000" :duration="1000" :circular="circular"
			:style="getStyle">
			<block v-for="(item,index) in arr" :key="index">
				<swiper-item>
					<view class="swiper-item" @tap="event(item,index)">
						<image :src="item.src" lazy-load 
							:style="getStyle" ></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	
	/**
	 * 轮播图 
	 * @description 轮播图 {swiper-image}
	 * @property {Array} arr 对象集合(广告图片)
	 * @property {Boolean} circular 是否循环
	 * @property {String} height 图片高度
	 * @property {Boolean} preview 图片预览
	 */
	export default {
		props:{
			arr:{
				type:Array
			},
			circular:{
				type:Boolean,
				default:false
			},
			height: {
				type: String,
				default: '350'
			},
			preview:{
				type: Boolean,
				default: false
			}
		},
		computed:{
			getStyle(){
				return `height: ${this.height}rpx;`
			},
			getUrls(){
				return this.arr.map((v)=> v.src)
			}
		},
		methods:{
			event(item,index){
				if(this.preview){
					return uni.previewImage({
						current: index,
						urls: this.getUrls,
						indicator:'default'
					})
				}
				
			}
		}
	}
</script>

<style>
</style>