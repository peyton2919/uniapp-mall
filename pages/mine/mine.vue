<template>
	<!-- 5. 我的页面 -->
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center animated fadeIn faster" style="height: 320rpx">
			
			<loading-plus v-if="beforeReady"></loading-plus>
			<!-- 消息列表 -->
			
			<view class="iconfont icon-xiaoxi position-absolute text-white" 
				style="font-size: 50rpx; top: 75rpx; right: 20rpx; z-index: 100"
				@click="navigate('msg-list')"></view>
		
			<image src="/static/images/bg.jpg" style="height: 320rpx; width: 100%"></image>

			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 50rpx">
				<image src="/static/images/demo/demo6.jpg" style="height: 145rpx; width: 145rpx; border: 5rpx solid" 
					class="rounded-circle border-light ml-4"></image>
				<navigator url="/pages/login/login">
					<view class="ml-2 text-white font-md">测试昵称</view>
				</navigator>
				<view class="d-flex a-center j-center a-self-end ml-auto px-2"
					style="height: 70rpx; background: #ffd43f; color: #cc4a00; border-top-left-radius: 40rpx; border-bottom-left-radius: 40rpx">
					<view class="line-h iconfont icon-huangguan mr-1"></view>
					会员积分 1.99
				</view>
			</view>
		</view>
		<!-- 图标分类 -->
		<card>
			<view slot="head" class="d-flex a-center j-sb py-2">
				<text class="font-md font-weight">我的订单</text>
				<view class="text-secondary font" @tap="navigate('order')">
					全部订单
					<text class="iconfont icon-you font"></text>
				</view>
			</view>
			<view class="d-flex a-center">
				<view class="flex-1 d-flex flex-column a-center j-center py-3" hover-class="bg-light-secondary" v-for="i in 4" :key="i">
					<view class="iconfont icon-cpu font-lg line-h"></view>
					<view>待付款</view>
				</view>
			</view>
		</card>
		<divider />

		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<uni-list-item class="font-md" showExtraIcon showBorderBottomLine clickable showArrow 
				:title="item.title" :leftIcon="item.icon" :leftIconStyle="item.iconStyle"
				@click="navigate(item.path)"></uni-list-item>
			<divider v-if="index === 4" />
		</block>

	</view>
</template>

<script>
import loading from "@/common/mixin/loading.js";
import card from '@/components/common/card-template.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';

export default {
	mixins:[loading],
	components: {
		card,
		uniListItem
	},
	data() {
		return {
			list: [
				{
					title:'小米会员',
					icon:'icon-VIP',
					iconStyle:'color: #fdbf2e;',
					path:'',
				},{
					title:'会员中心',
					icon:'icon-huangguan',
					iconStyle:'color: #fcbe2d;font-size: 40rpx;',
					path:'',
				},{
					title:'服务中心',
					icon:'icon-service',
					iconStyle:'color: #fa6c5e;',
					path:'',
				},{
					title:'小米之家',
					icon:'icon-home',
					iconStyle:'color: #fe8b42;',
					path:'',
				},{
					title:'更多功能',
					icon:'icon-gengduo',
					iconStyle:'color: #9ed45a;',
					path:'',
				},{
					title:'更多设置',
					icon:'icon-icon_set_up',
					iconStyle:'color: #808c98;',
					path:'user-set',
				}
			]
		};
	},
	methods: {
		navigate(path){
			console.log(path);
			if(!path){return;}
			uni.navigateTo({
				url: `/pages/${path}/${path}`
			});
		}
		
	}
};
</script>

<style></style>
