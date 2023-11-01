<template>
	<!-- 订单详情页面 -->
	<!-- 5.1.1 搜索列表页面
		1. 点击 底部导航栏 我的; 
		2. 跳转到 我的{mine} 页面, 点击 全部订单;
		3. 跳转到 订单页{order}, 点击 商品内容;
		3. 跳转到 本页面{order-detail};
		 -->
	<view>
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
				<view class="font-lg">卖家已发货</view>
				<view class="font">还差7天10时自动确认</view>
			</view>
			<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
		</view>
		
		<view class="p-3 bg-white">
			<view class="text-light-muted font-md">
				<text class="font-lg text-dark mr-2">楚绵</text>
				135*****123
			</view>
			<view class="text-light-muted font-md">广东省 广州市 白云区 XXX</view>
		</view>
		<divider />
		
		<view class="px-2">
			<block v-for="(item,index) in orderItems" :key="index">
				<order-list-item :item="item" :index="index"></order-list-item>
			</block>
		</view>
		
		<divider />
		
	</view>
</template>

<script>
	import orderListItem from '@/components/order/order-list-item-template.vue';
	
	export default {
		components:{
			orderListItem
		},		
		data() {
			return {
				createTime: '2020-09-10 10:30',
				status: '已发货',
				orderItems: [
					{
						cover: '/static/images/demo/demo6.jpg',
						title: '小米8',
						pprice: '1999.00',
						attrs: '金色 标配',
						num: 1
					}
				],
				totalNum: 3,
				totalPrice: 299
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
