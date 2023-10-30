<template>
	<view class="row j-center m-2">
		<block v-for="(item,index) in arr" :key="index">
			<view class="span-4 d-flex flex-column j-center a-center py-1"
				@tap="event(item)">
				<image :src="item.src" mode="widthFix" class="img-60" lazy-load></image>
				<text class="font-sm">{{item.text}}</text>
			</view>	
		</block>
	</view>
</template>

<script>
	/**
	 * 产品分类模板
	 * @description 产品分类模板 {index-nav}
	 * @property {Array} arr 产品分类集合
	 */
	export default {
		props:{
			arr:{
				type:Array
			}
		},
		methods:{
			event(item){
				uni.navigateTo({
					url: '/pages/search-list/search-list'
				})
			}
		}
	}
</script>

<style>
</style>