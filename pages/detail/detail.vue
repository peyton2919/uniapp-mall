<template>
	<!-- 点击任意商品 跳转到 详情页{detail} -->
	<view>
		<!-- 商品详情大图 -->
		<swiper-template :arr="banners" height="750" preview></swiper-template>
		<!-- 基础详情 -->
		<base-info :obj="detail"></base-info>
		
		<!-- 滚动商品特性 -->
		<scroll-attrs :arr="baseAttrs"></scroll-attrs>
		
		<!-- 属性选择 -->
		<view class="p-2 ">
			<view class="rounded border bg-light-secondary">

				<uni-list-item showArrow clickable @click="show('attr')">
					<view class="d-flex" slot="body">
						<text class="mr-2 text-muted">已选</text>
						<text>火焰红 64G 标配</text>
					</view>
				</uni-list-item>
				<uni-list-item showArrow clickable @click="show('express')">
					<view class="d-flex" slot="body">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">北京 东城区</text>
						<text class="main-text-color">现配</text>
					</view>
				</uni-list-item>
				<uni-list-item showArrow clickable @click="show('service')">
					<view class="d-flex a-center" slot="body">
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color pr-1"></view>小米自营
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color pr-1"></view>小米发货
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color pr-1"></view>七天无理由退货
						</view>
					</view>

				</uni-list-item>

			</view>
		</view>
		
		<!-- 横向滚动评论 -->
		<scroll-comments :arr="comments"></scroll-comments>
		
		<!-- 商品详情 -->
		<view class="py-3">
			<u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate"></u-parse>
		</view>
		
		<!-- 热门推荐 -->
		<card title="热门推荐" :titleWeight="false" :showHeadBorderBottom="false">
			<view class="row j-sb">
				<product-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index"></product-list>
			</view>
		</card>
		
		<!-- 底部操作条 -->
		<bottom-btn @showPopup="show('attr')"></bottom-btn>
		
		<!-- 属性模态框 -->
		<popup-template :popupClass="popup.attr" @hide="hide('attr')">
			<!-- 商品信息高度 275rpx 图片 180 *180 -->
			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="/static/images/demo/list/1.jpg" mode="widthFix" 
					style="height: 180rpx; width: 180rpx;" class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="fong-lg" unitSize="font" price="2365"></price>
					<text class="d-block">火焰红 64GB 标配</text>
				</view>
			</view>
			<!-- 表单部分高度 660rpx  -->
			<scroll-view scroll-y class="w-100" style="height: 660rpx;" >
				
				<card title="颜色" :titleWeight="false" :showHeadBorderBottom="false"
					v-for="(item,index) in selects" :key="index">
					<radio-group-template :label="item" :selected.sync ='item.selected'></radio-group-template>
				</card>
				
				<view class="d-flex j-sb py-2 a-center border-top border-light-secondary" style="height: 100rpx;">
					<text>购买数量</text>
					<uni-number-box :min="1" :value="detail.num" @change="detail.num = $event"></uni-number-box>
				</view>
			</scroll-view>
			<!-- 按钮高度 100rpx -->
			<view class="main-bg-color text-white font-md d-flex j-center a-center " 
				hover-class="main-bg-hover-color"
				style="height: 100rpx; margin-left: -25rpx; margin-right: -25rpx;"
				@tap.stop="addCart">
				加入购物车
			</view>
		</popup-template>
		
		<!-- 收货地址模态框 -->
		<popup-template :popupClass="popup.express" @hide="hide('express')">
			
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" 
				style="height: 100rpx;">
				收货地址
			</view>
			
			<scroll-view scroll-y class="w-100" style="height: 835rpx;" >
			
				<uni-list-item showArrow showBorderBottomLine v-for="(item,index) in pathList" :key="index">
					<view class="iconfont icon-dingwei font-weight main-text-color">{{item.name}}</view>
					<view class="font text-light-muted">{{item.path}} {{item.detailPath}}</view>
				</uni-list-item>
				
			</scroll-view>
			
			<!-- 按钮高度 100rpx -->
			<view class="main-bg-color text-white font-md d-flex j-center a-center " 
				hover-class="main-bg-hover-color"
				style="height: 100rpx; margin-left: -25rpx; margin-right: -25rpx;"
				@tap.stop="createPath">
				选择新的地址
			</view>
		</popup-template>
		
		<!-- 服务说明模态框 -->
		<popup-template :popupClass="popup.service" @hide="hide('service')">
			
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" 
				style="height: 100rpx;">
				服务说明
			</view>
			
			<scroll-view scroll-y class="w-100" style="height: 835rpx;" >
			
				<view class="py-1">
					<view class="d-flex a-center">
						<view class="iconfont icon-finish main-text-color mr-1"></view>
						小米自营
					</view>
					<text class="text-light-muted">
						不管满多少,就是不包邮
					</text>
				</view>
				
			</scroll-view>
			
			<!-- 按钮高度 100rpx -->
			<view class="main-bg-color text-white font-md d-flex j-center a-center " 
				hover-class="main-bg-hover-color"
				style="height: 100rpx; margin-left: -25rpx; margin-right: -25rpx;"
				@tap.stop="hide('service')">
				确定
			</view>
		</popup-template>
		
	</view>
</template>

<script>
	
	var htmlString = `
		<p>
			<img src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp">
			<img src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp">
			<img src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp">
			<img src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp">
			<img src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp">
			<img src="https://i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp">
			<img src="https://i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp">
		</p>
		    `
	
	import swiperTemplate from "@/components/index/swiper-template.vue"
	import baseInfo from "@/components/detail/base-info-template.vue"
	import scrollAttrs from "@/components/detail/scroll-attrs-template.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import scrollComments from "@/components/detail/scroll-comments-template.vue"
	import uParse from '@/components/uni-ui/uParse/src/wxParse.vue'
	import card from '@/components/common/card-template.vue'
	import productList from "@/components/common/product-list-template.vue"
	import bottomBtn from '@/components/detail/bottom-btn-template.vue'
	import popupTemplate from '@/components/common/popup-template.vue'
	import price from '@/components/common/price-template.vue'
	import radioGroupTemplate from "@/components/common/radio-group-template.vue"
	import uniNumberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import { mapState,mapMutations } from 'vuex'
	
	export default {
		components:{
			swiperTemplate,baseInfo,scrollAttrs,uniListItem,
			scrollComments,uParse,card,productList,bottomBtn,
			popupTemplate,price,radioGroupTemplate,uniNumberBox
		},
		data() {
			return {
				popup: {
					attr:'none',
					express:'none',
					service:'none'
				},
				banners: [
					{src: 'https://i8.mifile.cn/v1/a1/6d13e060-d5c5-e610-88d0-80816fa2b0ce.webp'},
					{ src: 'https://i8.mifile.cn/v1/a1/aff0b715-e63a-68f3-91b0-46a22543555e.webp'}
				],
				detail:{
					id: 20,
					title:'小米MIX36GB+128GB',
					explain: '磁动力滑盖全面屏 / 前面旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电',
					cover: '/static/images/demo/list/1.jpg',
					pprice: 3299,
					num: 2,
					max: 100
				},
				baseAttrs: [
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'},
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'},
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'},
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'},
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'},
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'},
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'},
					{icon: 'icon-cpu',title:'CPU',explain:'蛟龙845八核'}
				],
				comments:[
					{
						userPic: '/static/images/demo/demo6.jpg',
						username: '棉绵',
						createTime: '2020-11-1',
						goodsNum: 123,
						context:'评论内容非常好',
						imgList:[
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						],
					},{
						userPic: '/static/images/demo/demo6.jpg',
						username: '棉绵',
						createTime: '2020-11-1',
						goodsNum: 123,
						context:'评论内容非常好',
						imgList:[
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						],
					},{
						userPic: '/static/images/demo/demo6.jpg',
						username: '棉绵',
						createTime: '2020-11-1',
						goodsNum: 123,
						context:'评论内容非常好',
						imgList:[
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						],
					}
				],
				context: htmlString,
				hotList: [
					{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/1.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					}
				],
				selects:[{
					selected: 0,
					title:'颜色',
					list:[
						{name: "黄色"},
						{name: "黑色"},
						{name: "红色"}
					]
				},{
					selected: 0,
					title:'容量',
					list:[
						{name: "64GB"},
						{name: "128GB"},
						{name: "256GB"}
					]
				},{
					selected: 0,
					title:'套餐',
					list:[
						{name: "标配"},
						{name: "套餐一"},
						{name: "套餐二"}
					]
				}]
			}
		},
		// 监听页面返回事件
		onBackPress() {
			// 关闭模态窗
			for(let key in this.popup){
				if(this.popup[key] !== 'none'){
					this.hide(key)
					return true
				}
			}
			
		},
		computed:{
			...mapState({
				pathList:state=>state.path.list
			}),
			
		},
		methods: {
			...mapMutations([
				'addProductToCart'
			]),
			// 加入购物车
			addCart(){
				// 组织数据 
				let product = this.detail
				product['checked'] = false
				product['attrs'] = this.selects
				// 加入购物车
				this.addProductToCart(product)
				// 隐藏筛选框
				this.hide('attr')
				// 成功提示
				uni.showToast({
					title: '加入购物车成功'
				});
			},
			createPath(){
				uni.navigateTo({
					url: '/pages/user-path-edit/user-path-edit'
				});
				this.hide('express')
			},
			hide(key){
				this.popup[key] = 'hide'
				setTimeout(()=>{
					this.popup[key] = 'none'
				},200)
		
			},
			show(key){
				this.popup[key] = 'show'
			},
			preview(src,e){
				console.log(src);
			},
			navigate(href,e){
				console.log(href);
			},
			
		}
	}
</script>

<style scoped>
	.uparse .p{ padding: 0!important; }
	.uparse view,.uparse uni-view{ line-height: 0!important; }
	
	
</style>
