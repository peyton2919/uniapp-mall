<template>
	<!-- 1.1.1 搜索列表页面
		1. 点击 首页原生导航栏 输入框; 
		2. 跳转到 search 页面, 点击 search 原生导航栏 右边 搜索;
		3. 跳转到 本页面{search-list};
		 -->
	<view>
		<!-- 排序 | 筛选 -->
		<view class="d-flex border-top border-bottom a-center" style="height: 100upx;">
			<view class="flex-1 d-flex a-center j-center font-md" 
				v-for="(item,index) in screen.list" :key="index"
				@click="changeScreen(index)">
				<text :class="screen.currentIndex === index ? 'main-text-color':'text-light-muted'">
					{{item.name}}
				</text>
				<view class="font-md">
					<view class="iconfont icon-paixu-shengxu line-h0 font-md"
						:class="item.status === 1 ? 'main-text-color':'text-light-muted'"></view>
					<view class="iconfont icon-paixu-jiangxu line-h0 font-md"
						:class="item.status === 2 ? 'main-text-color':'text-light-muted'"></view>
				</view>
			</view>
			
			<view class="flex-1 d-flex a-center j-center font-md main-text-color"
				@click="showDrawer('showRight')">
				<text>
					筛选
				</text>
			</view>
			

			<!-- 抽屉 -->
			<uni-drawer ref="showRight" mode="right" :mask-click="false" :width="280">
				
				<card-template title="服务" :showHeadBorderBottom="false" :titleWeight="false">
					<radio-group-template :label="label" 
						:selected.sync = 'label.selected'></radio-group-template>
				</card-template>
				
				<view class="d-flex position-fixed bottom-0 right-0 w-100 ">
					<view class="flex-1 main-bg-color text-white font-md py-2 text-center border-top border-light-secondary"
						hover-class="main-bg-hover-color"
						@click="closeDrawer('showRight')">
						确定					
					</view>
					<view class="flex-1 font-md py-2 text-center "
						hover-class="main-bg-hover-color bg-light-secondary">重置</view>
				</view>
			</uni-drawer>
		</view>
		
		<block v-for="(item,index) in list" :key="index">
			<product-search-list :item="item" :index="index"></product-search-list>
		</block>
		
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-ui/uni-drawer/uni-drawer.vue"
	import cardTemplate from "@/components/common/card-template.vue"
	import radioGroupTemplate from "@/components/common/radio-group-template.vue"
	
	import productSearchList from "@/components/search-list/product-search-list-template.vue"
	
	
	export default {
		components:{
			uniDrawer,cardTemplate,radioGroupTemplate,productSearchList
		},
		data() {
			return {
				showRight: false,
				screen: {
					currentIndex: 0,
					list: [
						{name: '综合', status: 1},
						{name: '销量', status: 0},
						{name: '价格', status: 0}
					]
				},
				label:{
					selected: 0,
					list:[
						{name: "选项一"},
						{name: "选项二"},
						{name: "选项三"}
					]
				},
				list:[
					{
						title:'真无线蓝牙耳机',
						cover: '/static/images/demo/demo6.jpg',
						explain: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
						pprice: 2566,
						commentcount: 500,
						goodnum: 97
					},{
						title:'真无线蓝牙耳机',
						cover: '/static/images/demo/demo7.jpg',
						explain: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
						pprice: 2566,
						commentcount: 500,
						goodnum: 97
					},{
						title:'真无线蓝牙耳机',
						cover: '/static/images/demo/demo8.jpg',
						explain: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
						pprice: 2566,
						commentcount: 500,
						goodnum: 97
					},{
						title:'真无线蓝牙耳机',
						cover: '/static/images/demo/demo5.jpg',
						explain: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
						pprice: 2566,
						commentcount: 500,
						goodnum: 97
					},{
						title:'真无线蓝牙耳机',
						cover: '/static/images/demo/demo6.jpg',
						explain: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
						pprice: 2566,
						commentcount: 500,
						goodnum: 97
					},{
						title:'真无线蓝牙耳机',
						cover: '/static/images/demo/demo2.jpg',
						explain: '雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作',
						pprice: 2566,
						commentcount: 500,
						goodnum: 97
					}
				]
			}
		},
		methods: {
			// 改变屏风上下点击事件
			changeScreen(index){
				// 判断当前点击是否已经是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				if(oldIndex === index){
					return oldItem.status = oldItem.status === 1 ? 2 : 1
				}
				let newItem = this.screen.list[index]
				// 移除旧激活状态
				oldItem.status = 0
				this.screen.currentIndex = index
				// 增加新激活状态
				newItem.status = 1
			},
			confirm() {},
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			}
			
		}
	}
</script>

<style>
	.radio-active {
		background: #fce0d5!important;
		color: #eb7320!important;
		border-color: #eb7320!important;
	}
</style>
