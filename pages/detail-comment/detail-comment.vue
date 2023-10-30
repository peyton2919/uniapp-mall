<template>
	<!-- 1.1.1 商品评论页面
		1. 点击 首页或其他 商品;
		2. 跳转到 商品详情页, 在点击 更多评论(封装到detail->scroll-comments-template组件里);
		2. 跳转到 detail-comment 页面, 到了此页面;
		 -->
	<view>
		<view class="p-2">
			<view class="d-flex a-center py-2 border-bottom border-light-secondary">
				<text class="text-muted">用户评价(123)</text>
				<text class="main-text-color ml-auto mr-1">98.5%</text>
				<text class="text-muted">满意</text>
			</view>
			
			<view class="d-flex flex-wrap pt-2" style="margin-right: -20px;">
				<view class="px-2 py-1 border rounded mr-2 mb-2 cate-item" 
					v-for="(item,index) in cateList" :key="index"
					:class="cateIndex === index ? 'active':''"
					@tap="cateChange(index)">
					{{item.name}}
				</view>
			</view>
		</view>
		<divider/>
		 
		 <!-- 评论列表 -->
		 <view class="p-2 d-flex a-start border-bottom border-light-secondary">
			 <image src="/static/images/demo/demo6.jpg" mode="widthFix" 
				style="width: 90rpx; height: 90rpx;"
				class="rounded flex-shrink"></image>
			 <!-- flex-shrink 不被挤压 -->
			 
			 <view class="pl-2 flex-1">
				 <view class="d-flex a-center">
					 <text class="font-md text-primary font-weight">昵称</text>
					 <view class="iconfont icon-service main-text-color ml-auto">
						  <text class="pl-1 font">超好</text>
					 </view>
				 </view>
				 
				 <view class="line-h-md font-md">
					 非常好
				 </view>
				 
				 <view class="row">
					 <view class="span24-8 px pb">
						 <image src="/static/images/demo/cate_08.png" mode="widthFix" style="height: 100rpx;"></image>
					 </view>
				 </view>
				 <view class="d-flex a-center">
					 <text class="text-light-muted">2023-10-23</text>
					 <view class="d-flex text-light-muted ml-auto a-center mr-2">
						 0 <text class="iconfont icon-dianzan text-light-muted ml-1"></text>
					 </view>
					 <view class="d-flex text-light-muted text-light-muted a-center font">
					 	10 <text class="iconfont icon-pinglun text-light-muted ml-1"></text>					 
					 </view>
				 </view>
				 
				 <!-- 客服回复 -->
				 <view class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center mt-1">
					 <text class="main-text-color">官方回复:</text>
					 官方回复,文件用来对 
					 <view class="iconfont icon-dianzan text-light-muted ml-2 line-h-md">
						 <text class="text-muted pl-1">赞客服 120</text>
					 </view>
				 </view>
			 </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateIndex: 0,
				cateList: [
					{name:'全部'},
					{name:'有图'},
					{name:'非常喜欢'},
					{name:'拍照好'},
					{name:'手感很棒'},
					{name:'效果好'},
					{name:'性能很棒'}
				],
			}
		},
		methods: {
			// 分类点击事件
			cateChange(index){
				this.cateIndex = index
			}
		}
	}
</script>

<style scoped>
	.cate-item {
		background: #ffebec;
		color: #7b6d6c;
		border-color: #f4e0e1;
	}
	.cate-item.active {
		background: #ff6b01!important;
		color: #ffffff!important;
		border-color: #de7232!important;
	}
</style>
