<template>
	<!-- 5.1.1 搜索列表页面
		1. 点击 底部导航栏 我的; 
		2. 跳转到 mine 页面, 点击 更多设置;
		3. 跳转到 user-set 页面, 点击 个人资料;
		4. 跳转到 本页面{user-info};
		 -->
	<view>
		<divider />
		<uni-list-item title="头像" clickable showBorderBottomLine showRightSlot>
			<block slot="right">
				<image src="/static/images/demo/demo6.jpg" style="height: 90rpx; width: 90rpx;"
					class="rounded-circle border border-light"></image>
			</block>
		</uni-list-item>
		<uni-list-item title="姓名" clickable showBorderBottomLine rightText="Judy">
		</uni-list-item>
		<uni-list-item title="性别" showArrow clickable showBorderBottomLine ></uni-list-item>
		<uni-list-item title="生日" showArrow clickable showBorderBottomLine ></uni-list-item>
		<divider />
		<uni-list-item title="修改密码" showArrow clickable showBorderBottomLine ></uni-list-item>
		<uni-list-item title="密保手机" showArrow clickable showBorderBottomLine ></uni-list-item>
		
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	
	export default {
		components: {
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
