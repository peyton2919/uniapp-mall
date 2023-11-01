<template>
	<view class="bg-white" @click.stop="$U.navigate('order-detail')">
		<divider />
		<!-- 头部 -->
		<view class="d-flex a-center p-2 border-bottom border-light-secondary">
			<text class="text-light-muted font-md">{{item.createTime}}</text>
			<text class="main-text-color ml-auto font-md">{{item.status}}</text>
		</view>
		<!-- 主体 -->
		<view class="px-2">
			<block v-for="(item1,index1) in item.orderItems">
				<order-list-item :item="item1" :index="index1"></order-list-item>
			</block>
		</view>
		<!-- 底部 -->
		<view class="d-flex a-center py-2 px-3">
			<text class="text-dark font-md ml-auto">共{{item.totalNum}}件商品,合计: ￥{{item.totalPrice}}</text>
			
		</view>
		<view class="d-flex j-end pb-2">
			<view class="rounded border border-light-secondary px-3 py-1 text-secondary" 
				hover-class="bg-light-secondary">
				查看物流
			</view>
			<view class="rounded border border-light-secondary px-3 py-1 mx-1 text-secondary"
				hover-class="bg-light-secondary">
				确认收货
			</view>
		</view>
	</view>
</template>

<script>
	import orderListItem from "@/components/order/order-list-item-template.vue";
	/**
	 * 订单列表
	 * @property {Object} item 订单对象
	 * @property {Number} index 索引
	 */
	export default {
		components:{
			orderListItem
		},
		props: {
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
<!-- item 的数据格式 
{
	createTime:'2023-10-25 12:00',
	status: '已发货',
	orderItems: [
		{
			cover: '/static/images/demo/demo6.jpg',
			title: '小米8',
			pprice: '1999.00',
			attrs: '金色 标配',
			num: 1
		},{
			cover: '/static/images/demo/demo7.jpg',
			title: '小米9',
			pprice: '2999.00',
			attrs: '米白色 标配',
			num: 2
		}
	],
	totalNum: 3,
	totalPrice: 7997.00
} 
-->