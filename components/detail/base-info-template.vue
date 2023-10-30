<template>
	<!-- 基础详情 -->
	<view class="p-2">
		<view class="font-lg">{{obj.title}}</view>
		<view class="font text-light-muted mb-3 line-h-sm">
			{{obj.explain}}
		</view>
		<price :price="obj.pprice" priceSize="font-lg" unitSize="font"></price>
	</view>
</template>

<script>
	import price from "@/components/common/price-template.vue"
	/**
	 * 商品基础详情
	 * @property {Object} obj 商品对象
	 */
	export default {
		components:{
			price
		},
		props:{
			obj: {
				type: Object
			}
		}
	}
</script>

<style>
</style>