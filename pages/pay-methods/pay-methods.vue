<template>
	<!-- 订单支付方式 -->
	<!-- 4.1.1
		1. 点击 底部导航栏 购物车; 
		2. 跳转到 购物车{cart} 页面, 点击 结算;
		3. 跳转到 订单确认{order-confirm}页面, 点击 右下角 去支付;
		4. 跳转到 本页面{pay-methods}; -->
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-4">
			<text class="text-light-muted font-lg mb-3">支付金额</text>
			<price price="38" priceSize="font-big" unitSize="font-lg"></price>
		</view>
		
		<view class="px-2">
			<label>
				<uni-list-item clickable showExtraIcon showRightSlot 
					leftIcon="icon-zhifubao text-primary" 
					leftIconStyle=" font-size: 60rpx;"
					title="支付宝支付" note="推荐使用支付宝支付">
					<radio slot="right" color="#fd6801" value="1"/>
				</uni-list-item>
			</label>
		</view>
		
		<view class="px-2">
			<label>
				<uni-list-item clickable showExtraIcon showRightSlot 
					leftIcon="icon-weixinzhifu text-success" 
					leftIconStyle=" font-size: 60rpx;"
					title="微信支付">
					<radio slot="right" color="#fd6801" value="1"/>
				</uni-list-item>
			</label>
			<submit-btn radius="30" name="确定支付" viewClass=" mt-3" @click="submit"></submit-btn>
		</view>
	</view>
</template>

<script>
	import price from "@/components/common/price-template.vue";
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue";
	import submitBtn from "@/components/common/submit-btn-template.vue";
	
	export default {
		components:{
			price,uniListItem,submitBtn
		},
		data() {
			return {
				
			}
		},
		methods: {
			submit(){
				uni.navigateTo({
					url: '/pages/pay-result/pay-result'
				});
			}
		}
	}
</script>

<style>

</style>
