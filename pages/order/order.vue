<template>
	<!-- 订单 -->
	<!-- 5.1.1 搜索列表页面
		1. 点击 底部导航栏 我的; 
		2. 跳转到 mine 页面, 点击 全部订单;
		3. 跳转到 本页面{order};
		 -->
	<view style="background: #f5f5f5;">
		
		<!-- <view class="position-relative" style="height: 400rpx;">
			<no-thing icon="no_pay"></no-thing>
		</view> -->
		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top border-light-secondary">
			<view class="flex-1 d-flex a-center j-center py-2 "
				v-for="(item,index) in tabBars" :key="index"
				:class="index === tabIndex ? ' tab_active' : ' border-bottom'"
				@tap="changeTab(index)">
				{{item.name}}
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="position-relative">
			<block v-for="(item,index) in list" :key="index">
				<view class="bg-white">
					<!-- 头部 -->
					<view class="d-flex a-center p-2 border-bottom border-light-secondary">
						<text class="text-light-muted font-md">2023-10-25 12:00</text>
						<text class="main-text-color ml-auto font-md">已发货</text>
					</view>
					<!-- 主体 -->
					<view class="px-2">
						<view class="border-bottom d-flex a-center py-2 border-light-secondary">
							<image src="/static/images/demo/demo6.jpg" mode="widthFix" style="width: 150rpx; height: 150rpx;"
								class="rounded mx-2 flex-shrink"></image>
							<view class="flex-1">
								<view class="d-flex a-center">
									<text class="font-md text-dark">小米8</text>
									<text class="font-md text-light-muted ml-auto">￥1999.00</text>
								</view>
								<view class="d-flex a-center">
									<text class="font text-light-muted">金色</text>
									<text class="font text-light-muted ml-auto">x 1</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 底部 -->
					<view class="d-flex a-center py-2 px-3">
						<text class="text-dark font-md ml-auto">共3件商品,合计: ￥299.00</text>
						
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
			</block>
		</view>
		
		<!-- 为你推荐 -->
		<view class="text-center main-text-color font-md font-weight mt-5"> 为你推荐</view>
		<view class="position-relative d-flex a-center j-center text-secondary mb-3 pt-3">
			<view class="px-3 position-absolute bg-white" style=" z-index: 2;">买的人还买了</view>
			<view class="position-absolute" style="height: 1upx; left: 0; right: 0; background-color: #dddddd;"></view>
		</view>
		<view class="row j-sb bg-white">
			<product-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index"></product-list>
		</view>
	</view>
</template>

<script>
	import productList from "@/components/common/product-list-template.vue";
	import noThing from "@/components/common/no-thing-template.vue";
	
	export default {
		components:{
			productList,noThing
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{name: '全部',id: 0, nothing: 'no_pay'},
					{name: '待收款',id: 1, nothing: 'no_pay'},
					{name: '待收货',id: 2, nothing: 'no_receiving'},
					{name: '待评价',id: 3, nothing: 'no_comment'}
				],
				hotList: [
					{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					}
				],
				list: [
					{
						createTime:'2023-10-25 12:00',
						status: '已发货',
						order_items: [
							{
								cover: '/static/images/demo/demo6.jpg',
								title: '小米8',
								pprice: '1999.00',
								attrs: '金色',
								num: 1
							},{
								cover: '/static/images/demo/demo6.jpg',
								title: '小米8',
								pprice: '1999.00',
								attrs: '金色',
								num: 1
							}
						],
						totalNum: 3,
						totalPrice: 299
					}
				]
			}
		},
		methods: {
			// 切换选项卡
			changeTab(index){
				this.tabIndex = index
			}
		}
	}
</script>

<style>
	.tab_active {
		border-bottom: 8rpx solid #fd6801!important;
		color: #fd6801!important;
		/* margin-bottom: -5rpx; */
	}
</style>
