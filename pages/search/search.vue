<template>
	<!-- 1.1 搜索页面
		1. 点击 首页原生导航栏 输入框; 
		2. 跳转到 search 页面, 到了此页面;
		 -->
	<view>
		<!-- 头部卡片 -->
		<card-template title="热门搜索" cover="/static/images/demo/search-banner.png"></card-template>
		
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<block v-for="(item,index) in hots" :key="index">
				<color-tag-template :item="item" :index="index"></color-tag-template>
			</block>
		</view>
		
		<!-- 常用分类 -->
		<card-template title="常用分类" showBodyPadding :showHeadBorderBottom="false">
			<block v-for="(item,index) in cates" :key="index">
				<color-tag-template :item="item" :index="index" :color="false"></color-tag-template>
			</block>
		</card-template>
		<!-- 分割线 -->
		<divider/>
		<!-- 搜索记录 -->
		<card-template title="搜索记录">
			<uni-list-item title="小米" showBorderBottomLine :showArrow="false" ></uni-list-item>
		</card-template>
		
	</view>
</template>

<script>
	
	import cardTemplate from "@/components/common/card-template.vue"
	import colorTagTemplate from "@/components/search/color-tag-template.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	
	export default {
		components:{
			cardTemplate,colorTagTemplate,uniListItem
		},
		data() {
			return {
				hots:[
					{name:'领券中心'},
					{name:'Redmi K 20'},
					{name:'RedmiBook 14'},
					{name:'智能积木 越野四驱车'},
					{name:'手环 腕带'},
					{name:'领券中心'},
					{name:'Redmi K 20'},
					{name:'RedmiBook 14'},
					{name:'智能积木 越野四驱车'},
					{name:'手环 腕带'},
				],
				cates:[
					{ name: '耳机' },
					{ name: '音箱' },
					{ name: '手机' },
					{ name: '手表' },
					{ name: '配件' },
					{ name: '网关/传感器' },
					{ name: '健康' },
					{ name: '酷玩' }
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				uni.navigateTo({
					url: '/pages/search-list/search-list',
				});
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
