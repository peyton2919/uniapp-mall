<template>
	<view class="border-bottom d-flex a-center py-2 border-light-secondary" @click="$U.navigate('detail')">
		<image :src="item.cover" mode="widthFix" style="width: 150rpx; height: 150rpx;"
			class="rounded mx-2 flex-shrink"></image>
		<view class="flex-1">
			<view class="d-flex a-center">
				<text class="font-md text-dark">{{item.title}}</text>
				<text class="font-md text-light-muted ml-auto">￥{{item.pprice}}</text>
			</view>
			<view class="d-flex a-center">
				<text class="font text-light-muted">{{item.attrs}}</text>
				<text class="font text-light-muted ml-auto">x {{item.num}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 订单列表 项
	 * @property {Object} item 订单项 对象
	 * @property {Number} index 索引
	 */
	export default {
		props: {
			item: {
				type: Object
			},
			index: {
				type: Number,
				default: -1
			}
		}
	}
</script>

<style>
</style>