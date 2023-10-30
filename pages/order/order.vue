<template>
	<!-- 订单 -->
	<view style="background: #f5f5f5;">
		
		<!-- <view class="position-relative" style="height: 400rpx;">
			<no-thing icon="no_pay"></no-thing>
		</view> -->
		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top ">
			<view class="flex-1 d-flex a-center j-center py-2"
				v-for="(item,index) in tabBars" :key="index"
				:class="index === tabIndex ? ' tab_active' : ''"
				@tap="changeTab(index)">
				{{item.name}}
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="position-relative">
			{{tabBars[tabIndex].name}}
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
		border-bottom: 5rpx solid #fd6801;
		color: #fd6801;
		margin-bottom: -5rpx;
	}
</style>
