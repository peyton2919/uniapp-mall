<template>
	<!-- 订单确认页面 -->
	<!-- 4.1.1 
		1. 点击 底部导航栏 购物车; 
		2. 跳转到 cart 页面, 点击 结算;
		3. 跳转到 本页面{order-confirm}; -->
	<view style="background-color: #f5f5f5; min-height: 100%; height: auto;">
		<!-- 地址选择 -->
		<view class="main-bg-color text-white d-flex a-center px-3" style="height: 250rpx;"
			hover-class="main-bg-hover-color"
			@click="openPathList">
			<view>
				<template v-if="path">
					<view class="font-weight font-md d-flex a-center font-lg">
						{{path.name}} {{path.phone}}
						<view class="border border-white rounded px-1 font ml-2"
							v-if="path.isDefault">
							默认
						</view>
					</view>
				</template>
				<template v-else>
					<view class="font-weight font-md d-flex a-center font-lg">
						请选择收货地址						
					</view>
				</template>
				
				<view class="font">
					{{path.path}}{{path.detailPath}}
				</view>
			</view>
			<view class="iconfont icon-you ml-auto"></view>
		</view>
		
		<view style="border-top-left-radius: 35rpx; border-top-right-radius: 35rpx; margin-top: -35rpx;overflow: hidden;">
			<view class="bg-white">
				<uni-list-item showArrow clickable rightText="共3件">
					<view class="d-flex a-center">
						<image src="/static/images/demo/demo6.jpg" style="width: 100rpx; height: 100rpx;"
							class="rounded mr-2"></image>
						<image src="/static/images/demo/demo6.jpg" style="width: 100rpx; height: 100rpx;"
							class="rounded mr-2"></image>
						<image src="/static/images/demo/demo6.jpg" style="width: 100rpx; height: 100rpx;"
							class="rounded mr-2"></image>
					</view>
				</uni-list-item>
				<uni-list-item title="商品总价" showRightSlot clickable >
					<view slot="right">
						<price price="200" color="text-dark"></price>
					</view>
				</uni-list-item>
				<uni-list-item title="运费" rightText="包邮" clickable showBorderBottomLine>
				</uni-list-item>
				<uni-list-item title="优惠券" showRightSlot clickable showArrow @click="$U.navigate('order-coupon')">
					<view slot="right" class="text-light-muted">无可用</view>
				</uni-list-item>
				<uni-list-item showRightSlot clickable>
					<text class="main-text-color">小计</text>
					<view slot="right" class="text-light-muted">
						<price price="2000"></price>
					</view>
				</uni-list-item>
				<divider/>
				<uni-list-item title="发票" showRightSlot clickable showArrow
					@click="openOrderInvoice">
					<view slot="right">电子发票-个人</view>
				</uni-list-item>
			</view>
		</view>
		<!-- 底部导航栏 -->
		<view class="position-fixed d-flex a-center j-end bottom-0 left-0 right-0 bg-white p-2 font-md">
			合计:
			<view class="ml-2">
				<price price="5000"></price>
			</view>
			
			<view class="ml-2 px-3 py-1 main-bg-color text-white font-md" style="border-radius: 25rpx;"
				hover-class="main-bg-hover-color"
				@click="openPayMehtods">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue";
	import price from "@/components/common/price-template.vue";
	import {mapGetters} from 'vuex'
	
	export default {
		components:{
			uniListItem,price
		},
		data() {
			return {
				path: false
			}
		},
		onLoad() {
			if(this.defaultPath.length){
				this.path = this.defaultPath[0]
			}
			// 开启监听选择收货地址事件
			uni.$on('choosePath',(res)=>{
				this.path = res
			})
			
		},
		onUnload() {
			// 关闭收货地址监听事件
			uni.$off('choosePath')
		},
		computed:{
			...mapGetters([
				'defaultPath'
			]),
		},
		methods: {
			// 
			openPathList(){
				uni.navigateTo({
					url: '/pages/user-path-list/user-path-list?type=choose',
				});
			},
			openOrderInvoice(){
				uni.navigateTo({
					url: '/pages/order-invoice/order-invoice',
				});
			},
			openPayMehtods(){
				uni.navigateTo({
					url: '/pages/pay-methods/pay-methods'
				});
			}
		}
	}
</script>

<style>

</style>
