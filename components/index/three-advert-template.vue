<template>
	<!-- 广告位
		左边 W: 373 H: 530
		右边 W: 375 H: 264 *2
		-->
	<view class="d-flex">
		<image :src="obj.big.src" lazy-load 
			style="width: 373upx; height: 530upx; border-right: 2upx solid #f5f5f5;"
			@tap="event(obj.big)"></image>
		
		<view class="d-flex flex-column">
			<image :src="obj.smalltop.src" lazy-load
				style="width: 375upx; height: 264upx;border-bottom: 2upx solid #f5f5f5;"
				@tap="event(obj.smalltop)"></image>
			<image :src="obj.smallbottom.src" lazy-load
				style="width: 375upx; height: 264upx;"
				@tap="event(obj.smallbottom)"></image>
		</view>
	</view>
	
</template>

<script>
	/**
	 * 三幅广告位 (W: 750 H: 530)
	 * 左边 W: 373 H: 530
	 * 右边 2*(W: 375 H: 264)
	 * @property {Object} obj 三幅广告对象
	 * 	@value big 左边广告对象  {图片地址的写法: obj.big.src}
	 *  @value smalltop 右边上边广告对象  {图片地址的写法: obj.smalltop.src}
	 *  @value smallbottom 右边下边广告对象  {图片地址的写法: obj.smallbottom.src}
	 */
	export default {
		props:{
			obj:{
				type:Object
			}
		},
		methods:{
			/**
			 * <h4>点击对象</h4>
			 * @param {Object} obj 点击当前图片的事件
			 */
			event(obj){
				console.log("你点击了"+ obj.src);
			}
		}
	}
</script>

<style>
	
</style>