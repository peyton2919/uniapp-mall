<template>
	<!-- 发票 -->
	<!-- 4.1.1 搜索列表页面
		1. 点击 底部导航栏 购物车; 
		2. 跳转到 cart 页面, 点击 结算;
		3. 跳转到 订单确认页{order-confirm}, 点击 发票 电子 发票;
		3. 跳转到 本页面{order-invoice};
		 -->
	<view>
		<divider />
		<card title="发票类型" showBodyPadding cardStyle="background:#ffffff;">
			<radio-group-template :label="label1"
				:selected.sync = 'label1.selected'></radio-group-template>
			<view class="text-light-muted line-h-md font-md" >
				{{content}}
			</view>
		</card>
		<divider />
		<card title="发票抬头" showBodyPadding cardStyle="background:#ffffff;">
			<radio-group-template :label="label2"
				:selected.sync = 'label2.selected'></radio-group-template>
		</card>
		<view class="p-2 border-bottom d-flex a-center bg-white" >
			<text class="font-md">个人姓名:</text>
			<text class="ml-2">个人</text>
		</view>
		<view class="p-2 border-bottom d-flex a-center bg-white" >
			<text class="font-md">发票内容:</text>
			<text class="ml-2">商品明细</text>
		</view>
		<divider />
		<view class="p-2 border-bottom d-flex a-center bg-white" >
			<text class="font-md">收票人手机:</text>
			<text class="ml-2">136*****123</text>
		</view>
		<view class="p-2 text-light-muted d-flex flex-column">
			<text>发票须知:</text>
			<text>1. 发票的实际支付金额,不包括优惠券等;</text>
			<text>2. 电子发票可在订单完成后,在订单详情中查看;</text>
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card-template.vue";
	import radioGroupTemplate from "@/components/common/radio-group-template.vue";
	
	export default {
		components:{
			card,radioGroupTemplate
		},
		data() {
			return {
				content: '电子发票与纸质发票具有相同的法律效力,可作为报销、售后、维权凭证,推荐使用电子发票,不怕丢失,更方便,环保。',
				label1 :{
					selected: 0,
					list:[
						{name: "电子发票"},
					]
				},
				label2 :{
					selected: 0,
					list:[
						{name: "个人"},
						{name: "单位"},
					]
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		background: #eeeeee;
	}
</style>
