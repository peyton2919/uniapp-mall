<template>
	<!-- 消息列表 二个地方进入 
		1. 首页 顶部导航栏 左侧 点击消息图标进入 
		2. 我的 顶部 右侧 点击 消息图标进入 -->
	<view class="p-2 page-bg-gray h-100">
		<view class="mb-2 p-2 bg-white rounded" hover-class="bg-light"
			v-for="(item,index) in list" :key="index"
			@click="open(item)">
			<view class="text-dark font-md">{{item.title}}</view>
			<view class="font text-light-muted">{{item.explain}}</view>
			<view class="font text-light-muted">{{item.createTime}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title:'uni-app 第三季仿微信app正式开售啦',
						explain:'开启纯nvue原生渲染,大大提高性能',
						createTime:'2020-09-01'
					},{
						title:'uni-app 第三季仿微信app正式开售啦',
						explain:'开启纯nvue原生渲染,大大提高性能',
						createTime:'2020-09-01'
					},{
						title:'uni-app 第三季仿微信app正式开售啦',
						explain:'开启纯nvue原生渲染,大大提高性能',
						createTime:'2020-09-01'
					},{
						title:'uni-app 第三季仿微信app正式开售啦',
						explain:'开启纯nvue原生渲染,大大提高性能',
						createTime:'2020-09-01'
					}
					
				]
			}
		},
		methods: {
			open(item){
				console.log(JSON.stringify(item))
				uni.navigateTo({
					url: '/pages/msg-detail/msg-detail?detail=' + JSON.stringify(item)
				});
			}
		}
	}
</script>

<style>

</style>
