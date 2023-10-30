<template>
	<view class="p-2">
		<scroll-view scroll-x class="scroll-row">
			
			<view class="scroll-row-item rounded bg-light-secondary mr-2 p-2" 
				style="width: 620rpx; height: 380rpx;"
				v-for="(item,index) in arr" :key="index">
				
				<view class="d-flex a-center mb-1">
					<image :src="item.userPic" mode="widthFix"
						style="width: 70rpx; height: 70rpx;"
						class="rounded-circle"></image>
					
					<view class="ml-2">
						<text class="d-block font-md line-h">{{item.username}}</text>
						<text class="d-block font text-light-muted line-h-sm">{{item.createTime}}</text>
					</view>
					
					<view class="iconfont icon-dianzan text-light-muted font pl-1 ml-auto">
						{{item.goodsNum}}
					</view>
				</view>
				
				<text class="d-block font-md mb-1">{{item.context}}</text>
				
				<view class="row">
					<view class="span24-8 px-2" 
						v-for="(item2,index2) in item.imgList" :key="index2">
						<image :src="item2" mode="widthFix"
							style="height: 115rpx;"
							class="rounded"></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<navigator url="/pages/detail-comment/detail-comment">
			<view class="d-flex j-center a-center py-2 mt-2 text-primary"
				hover-class="bg-light-secondary">
				更多评论 <view class="iconfont icon-you pl-1"></view>
			</view>
		</navigator>
	</view>
</template>

<script>
	/**
	 * scroll 商品评论
	 * @@property {Array} arr 商品评论集合 
	 */
	export default {
		props:{
			arr: {
				type: Array
			}
		}
	}
</script>

<style>
</style>