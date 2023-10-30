<template>
	<!-- 5.1.1 搜索列表页面
		1. 点击 底部导航栏 我的; 
		2. 跳转到 mine 页面, 点击 更多设置;
		3. 跳转到 本页面{user-set};
		 -->
	<view>
		<card :title="item.label" bodyStyle="background:#ffffff;"
			v-for="(item,index) in list" :key="index">
			<uni-list-item :title="item1.title" showArrow clickable 
				v-for="(item1,index1) in item.values" :key="index1"
				@click="navigate(item1.path)"></uni-list-item>
		</card>
		
		<view class="p-3">
			<button type="default" class="bg-white">退出登录</button>
		</view>
	</view>
</template>

<script>
	
	import card from '@/components/common/card-template.vue';
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	
	export default {
		components: {
			card,
			uniListItem
		},
		data() {
			return {
				list: [
					{
						label: '账号管理',
						values: [
							{title: '个人资料',path: 'user-info'},
							{title: '收货地址',path: 'user-path-list'}
						]
					},{
						label: '关于',
						values: [
							{title: '关于商城',path: ''},
							{title: '意见反馈',path: ''},
							{title: '协议规则',path: ''},
							{title: '资质证件',path: ''},
							{title: '用户协议',path: ''},
							{title: '隐私政策',path: ''}
						]
					}
				]
			}
		},
		methods: {
			navigate(path){
				if(!path){return;}
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				});
			}
		}
	}
</script>

<style scoped>
	page { background: #eeeeee;}
</style>
