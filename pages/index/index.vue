<template>
	<!-- 1. 首页 vue 页面 -->
	<view >
		<view style="height: 80rpx;"></view>
		<!-- 顶部选项卡 scroll-with-animation 动画属性  -->
		<scroll-view scroll-x class="border-bottom scroll-row"
			style="height: 80rpx;padding: 20 10rpx;white-space:nowrap;top:var(--window-top);z-index: 2;position: fixed;background-color: #ffffff;"
			:scroll-into-view="scrollinto"
			:scroll-with-animation="true">
			
			<view class="scroll-row-item px-2" 
				v-for="(item,index) in tabBars" :key="index"
				:id="'tab' + index"
				@click="changeTab(index)">
				<text class="border-bottom font-lg"
					:style="{'color':tabIndex===index?'#fd6801':'#333333','border-bottom':tabIndex===index ? '5upx solid #fd6801':'#ffffff'}">
					{{item.name}}
				</text>
			</view>
		</scroll-view>
		
		<!-- duration: 滑动动画时长 -->
		<swiper :duration="150" :current="tabIndex" :style="'height:'+ scrollH +'px;'"
			@change="changeSwiper">
			<swiper-item v-for="(item,index) in newsItems" :key="index">
				
				<!-- 一个页面 -->
				<scroll-view scroll-y="true" :style="'height:'+ scrollH +'px;'"
					@scrolltolower="loadmore(index)">
					
					<block v-for="(item2,index2) in item.list" :key="index2">
						<!-- 轮播图组件  circular 是否循环 -->
						<swiper-template v-if="item2.type === 'swiper'" :arr="item2.data" circular/>
						
						<!-- 首页分类 -->
						<template v-else-if="item2.type === 'nav'">
							<nav-template :arr="item2.data"/>
							<divider/>
						</template>
						
						<!-- 三图广告 -->
						<template v-else-if="item2.type === 'threeAdvert'">
							<three-advert-template :obj="item2.data"/>					
							<divider/>
						</template>
						
						<!-- 大图广告位 -->
						<template v-else-if=" item2.type === 'bigimage'">
							<card-templater title="每日精选" :cover="item2.data.src"></card-templater>
						</template>
						
						<!-- 公共列表组件 -->
						<view class="row j-sb"  v-else-if ="item2.type === 'list'">
							<block v-for="(item3,index3) in item2.data" :key="index3">
								<product-list-template :item="item3" :index="index3"></product-list-template>
							</block>
						</view>
					</block>
					
					<!-- 上拉加载更多 -->
					<divider/>
					<view class="d-flex a-center j-center text-light-muted font-md py-1">
						{{item.loadtext}}
					</view>
				</scroll-view>	
			</swiper-item>
		</swiper>
		
	
		
		
	</view>
</template>

<script>
	const demoTabBars = [{name:"关注"},{name:"推荐"},
					{name:"体育"},{name:"热点"},{name:"财经"},
					{name:"娱乐"},{name:"军事"},{name:"新浪"},
					{name:"百度"},{name:"AI智能"}];
	
	const demo1 = [     // 表示 这个 tabBar 下所有的数据(一个页面)
			{
				type: "swiper",
				data:[
					{src:'/static/images/demo/demo4.png',url:'#'},
					{src:'/static/images/demo/demo1.jpg',url:'#'},
					{src:'/static/images/demo/demo2.jpg',url:'#'}
				]
			},{
				type: "nav",
				data:[
					{src:'/static/images/nav/1.png',text:'新品发布'},
					{src:'/static/images/nav/2.gif',text:'小米众筹'},
					{src:'/static/images/nav/3.gif',text:'以旧换新'},
					{src:'/static/images/nav/4.gif',text:'一分换团'},
					{src:'/static/images/nav/5.gif',text:'超值特卖'},
					{src:'/static/images/nav/6.gif',text:'小米秒杀'},
					{src:'/static/images/nav/7.gif',text:'真心想要'},
					{src:'/static/images/nav/8.gif',text:'电视热卖'},
					{src:'/static/images/nav/9.gif',text:'家电热卖'},
					{src:'/static/images/nav/10.gif',text:'米粉卡'}
				]
			},{
				type: "threeAdvert",
				data:{
					big:{
						src:"/static/images/demo/demo1.jpg"
					},
					smalltop:{
						src:"/static/images/demo/demo2.jpg"
					},
					smallbottom:{
						src:"/static/images/demo/demo3.jpg"
					}
				}
			},{
				type: "bigimage",
				data:{
					src:"/static/images/demo/demo4.png"
				}
			},{
				type: "list",
				data:[
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
				]
			}
		];
	
	
	
	const demo2 = [
			{
				type: "swiper",
				data:[
					{src:'/static/images/demo/demo9.jpg',url:'#'},
					{src:'/static/images/demo/demo8.jpg',url:'#'},
					{src:'/static/images/demo/demo1.jpg',url:'#'}
				]
			},{
				type: "bigimage",
				data:{
					src:"/static/images/demo/demo5.jpg"
				}
			},{
				type: "list",
				data:[
					{
						cover: '/static/images/demo/list/2.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/3.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/4.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/5.jpg',
						title: '米家空调',
						explain: '1.5匹变频',
						oprice: 2699.00,
						pprice: 1366.00
					},{
						cover: '/static/images/demo/list/6.jpg',
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
				]
			}
		];
		
	
	const demo3 = [
		{
			type: "bigimage",
			data:{
				src:"/static/images/demo/demo10.jpg"
			}
		},{
			type: "list",
			data:[
				{
					cover: '/static/images/demo/list/6.jpg',
					title: '米家空调',
					explain: '1.5匹变频',
					oprice: 2699.00,
					pprice: 1366.00
				},{
					cover: '/static/images/demo/list/5.jpg',
					title: '米家空调',
					explain: '1.5匹变频',
					oprice: 2699.00,
					pprice: 1366.00
				},{
					cover: '/static/images/demo/list/3.jpg',
					title: '米家空调',
					explain: '1.5匹变频',
					oprice: 2699.00,
					pprice: 1366.00
				},{
					cover: '/static/images/demo/list/4.jpg',
					title: '米家空调',
					explain: '1.5匹变频',
					oprice: 2699.00,
					pprice: 1366.00
				},{
					cover: '/static/images/demo/list/6.jpg',
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
			]
		}
	];
	
	const demo4 = [     // 表示 这个 tabBar 下所有的数据(一个页面)
		{
			type: "nav",
			data:[
				{src:'/static/images/nav/6.gif',text:'小米秒杀'},
				{src:'/static/images/nav/7.gif',text:'真心想要'},
				{src:'/static/images/nav/8.gif',text:'电视热卖'},
				{src:'/static/images/nav/9.gif',text:'家电热卖'},
				{src:'/static/images/nav/10.gif',text:'米粉卡'}
			]
		},{
			type: "threeAdvert",
			data:{
				big:{
					src:"/static/images/demo/demo1.png"
				},
				smalltop:{
					src:"/static/images/demo/demo6.jpg"
				},
				smallbottom:{
					src:"/static/images/demo/demo5.jpg"
				}
			}
		},{
			type: "bigimage",
			data:{
				src:"/static/images/demo/demo4.png"
			}
		},{
			type: "list",
			data:[
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
			]
		}
	];
	
	const demo5 = [
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
	]
	
	import swiperTemplate from "@/components/index/swiper-template.vue";
	import navTemplate from "@/components/index/nav-template.vue";
	import threeAdvertTemplate from "@/components/index/three-advert-template.vue";
	import cardTemplater from "@/components/common/card-template.vue";
	import productListTemplate from "@/components/common/product-list-template.vue"
	
	
	export default {
		components:{
			swiperTemplate,navTemplate,threeAdvertTemplate,cardTemplater,productListTemplate
		},
		data() {
			return {
				// 滑动 swiper 时,顶部选项卡超出时 绑定
				scrollinto:"",
				// 可视区域高度
				scrollH: 500,
				// 默认选中项
				tabIndex:0,
				// 选项卡列表
				tabBars:[],
				// 页面数据集合 与 tabBars
				newsItems:[]

			}
		},
		onLoad() {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - uni.upx2px(82)
				}
			});
			// 初始化数据
			this.__init()
		},
		methods: {
			// 顶部选项卡 切换事件
			changeTab(index){
				if(this.tabIndex === index){ return; }
				this.tabIndex = index
				// 滑动 swiper 时,顶部选项卡超出时 绑定 事件
				this.scrollinto = 'tab' + index
				
				// 加载数据
				this.loadData()
			},
			// 监听 列表(swiper) 滑动事件
			changeSwiper(e){
				this.changeTab(e.detail.current)
			},
			__init(){
				// 获取 顶部选项卡
				this.tabBars = demoTabBars
				
				// 根据 顶部选项卡生成页面
				let arr = []
				for (var i = 0; i < this.tabBars.length; i++) {
					let obj = {
						list:[],
						// 1. 上拉加载更多 2. 加载中... 3. 没有更多了
						loadtext:"上拉加载更多"
					}
					// 获取首屏数据
					if (i === 0){
						obj.list = demo1
					}
					
					arr.push(obj)
				}
				this.newsItems = arr
			},
			// 加载数据
			loadData(){
				// 拿到当前索引
				let index = this.tabIndex
				// 请求数据库
				
				if(index === 1) { this.newsItems[index].list = demo2;}
				else if(index === 2){ this.newsItems[index].list = demo3;}
				else if(index === 3){ this.newsItems[index].list = demo4;}
			},
			// 下拉 加载更多
			loadmore(index){
				let item = this.newsItems[index]
				// 是否处理加载状态
				if(item.loadtext !== '上拉加载更多'){ return; }
				
				// 模拟加载
				item.loadtext = '加载中...'
		
				setTimeout(()=>{
					item.list = [
						...item.list,...demo2
					];
					// 恢复状态
					item.loadtext = '上拉加载更多'
				},2000)
				
				
			},
			
			
		}
	}
</script>

<style>
	.tab{
			position: fixed;
			height: 100rpx;
			background-color: #f7f7f7;
			white-space: nowrap;
			top:var(--window-top); 
			z-index: 2;
			left: 0;
			::-webkit-scrollbar {
				display: none;
			}
			.bar{
				font-size: 40rpx;
				display: inline-block;
				line-height: 100rpx;
				margin: 0 10rpx;
				&.active{
					color: red;
				}
			}
		}
</style>
