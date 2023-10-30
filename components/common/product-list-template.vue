<template>
	<view style="width: 373upx;">		
		<image :src="item.cover" mode="widthFix" lazy-load></image>
		<view class="p-2 pt-1">
			<view class="font-md">{{item.title}}</view>
			<text class="d-block font text-light-muted">{{item.explain}}</text>
			<view class="d-flex my-1">
				<price-template :price="item.pprice"></price-template>
				<view class="font-sm text-light-muted line-through ml-2 a-self-end">
					￥{{item.oprice|priceFormat}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import priceTemplate from "@/components/common/price-template.vue"
	/**
	 * 商品列表模板
	 * @description 商品列表 {common-list}
	 * @property {Object} item 商品对象
	 * @property {Number} index 索引
	 */
	export default {
		components:{
			priceTemplate
		},
		props:{
			item: {
				type: Object,
				required: true
			},
			index: {
				type: Number,
				default: 0
			}
		},
		filters:{
			priceFormat(value){
				return parseFloat(value).toFixed(2);
			}
		}
	}
</script>

<style>
</style>