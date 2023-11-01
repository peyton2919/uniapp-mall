<template>
	<!-- 订单 -->
	<!-- 5.1.1 搜索列表页面
		1. 点击 底部导航栏 我的; 
		2. 跳转到 mine 页面, 点击 全部订单;
		3. 跳转到 本页面{order};
		 -->
	<view style="background: #f5f5f5;">
		
		<!-- <view class="position-relative" style="height: 400rpx;">
			
		</view> -->
		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top border-light-secondary">
			<view class="flex-1 d-flex a-center j-center py-2 "
				v-for="(item,index) in tabBars" :key="index"
				:class="index === tabIndex ? ' tab_active' : ' border-bottom'"
				@click="changeTab(index)">
				{{item.name}}
			</view>
		</view>
		
		<!-- 订单列表 -->
		<block v-for="(tab,tabI) in tabBars" :key="tabI">
			<view class="position-relative" v-show="tabI === tabIndex" style="min-height: 440rpx;">
				<!-- 显示订单列表 -->
				<template v-if="tab.list.length>0">
					<block v-for="(item,index) in tab.list" :key="index">
						<order-list :item="item" :index="index"></order-list>
					</block>
				</template>
				<!-- 默认 无数据 -->
				<template v-else>
					<no-thing :icon="tab.nothing" :msg="tab.msg"></no-thing>
				</template>
			</view>
		</block>
		
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
	import orderList from "@/components/order/order-list-template.vue";
	
	export default {
		components:{
			productList,noThing,orderList
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '全部',
						id: 0, 
						nothing: 'no_pay',
						msg: '您还没有待付款订单',
						list: [
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
						]
					},{
						name: '待收款',
						id: 1, 
						nothing: 'no_pay',
						msg: '您还没有待付款订单',
						list: []
					},{
						name: '待收货',
						id: 2, 
						nothing: 'no_receiving',
						msg: '您还没有待收货订单',
						list: []
					},{
						name: '待评价',
						id: 3, 
						nothing: 'no_comment',
						msg: '您还没有待评价订单',
						list: []
					}
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

<style scoped>
	.tab_active {
		border-bottom: 8rpx solid #fd6801!important;
		color: #fd6801!important;
		/* margin-bottom: -5rpx; */
	}
</style>
