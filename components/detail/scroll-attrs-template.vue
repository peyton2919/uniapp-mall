<template>
	<!-- 滚动商品特性 -->
	<view>
		<scroll-view scroll-x class="scroll-row">
			<view class="scroll-row-item" style="width: 170rpx; height: 120rpx;"
				v-for="(item,index) in arr" :key="index">
				<view class="d-flex flex-column a-center j-center">
					<view class="iconfont line-h-sm"
						:class="item.icon"></view>
					<view class="line-h-sm">{{item.title}}</view>
					<view class="text-light-muted font-sm line-h-sm">{{item.explain}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	/**
	 * 横向滚动
	 * @property {Array} arr 滚动对象集合
	 */
	export default {
		props:{
			arr:{
				type: Array
			}
		}
	}
</script>

<style>
</style>