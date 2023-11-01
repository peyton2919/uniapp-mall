<template>
	<!-- 订单支付成功 -->
	<!-- 4.1.1
		1. 点击 底部导航栏 购物车; 
		2. 跳转到 购物车{cart} 页面, 点击 结算;
		3. 跳转到 订单确认{order-confirm}页面, 点击 右下角 去支付;
		4. 跳转到 订单支付方式{pay-methods}页面, 点击 确定支付; 
		5. 跳转到 本页面{pay-result};-->
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="iconfont icon-iconfontxuanzhong4 main-text-color line-h-sm" style="font-size: 120rpx;"></text>
			<text class="text-dark font-lg line-h-sm">支付成功</text>
		</view>
		<view class="px-5">
			<submit-btn radius="30" name="查看订单" @click="submit"></submit-btn>
			<submit-btn radius="30" name="返回首页" @click="submit" 
				btnClass=" text-dark " 
				background=" bg-light-secondary border border-light-secondary "
				hoverClass="btn-bg-white-hover"></submit-btn>
		</view>
		
	</view>
</template>

<script>
	import submitBtn from "@/components/common/submit-btn-template.vue";
	
	export default {
		components:{
			submitBtn
		},
		data() {
			return {
				
			}
		},
		methods: {
			submit(){
				
			}
		}
	}
</script>

<style>
	
</style>
