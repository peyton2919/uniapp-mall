<template>
	<view class="row p-2 border-bottom border-light-secondary animated fadeIn faster">
		
		<view class="span-6">
			<image :src="item.cover" mode="widthFix"></image>
		</view>
		<view class="span-14 pl-3 d-flex flex-column">
			<view class="font-md font-weight">{{item.title}}</view>
			<view class="font text-light-muted line-h-md mb-auto">
				{{item.explain}}
			</view>
			<price-template :price="item.pprice"></price-template>
			<view class="font-sm text-light-muted pt-1">
				{{item.commentcount}}  条评论  {{item.goodnum}}%  满意
			</view>
		</view>
		
	</view>
</template>

<script>
	
	import priceTemplate from "@/components/common/price-template.vue"
	
	/**
	 * 商品搜索列表模板
	 * @description 商品列表 {search-list}
	 * @property {Object} item 商品对象
	 * @property {Number} index 索引
	 */
	export default {
		components:{
			priceTemplate
		},
		props:{
			item: {
				type: Object
			},
			index: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style>
</style>