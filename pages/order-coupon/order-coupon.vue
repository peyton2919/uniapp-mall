<template>
	<!-- 优惠券 -->
	<view class="d-flex flex-column" style="height: 100%;">
		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top border-light-secondary">
			<view class="flex-1 d-flex a-center j-center py-2 "
				v-for="(item,index) in tabBars" :key="index"
				:class="index === tabIndex ? ' tab_active' : ' border-bottom'"
				@click="changeTab(index)">
				{{item.name}}
			</view>
		</view>
		
		<!-- 订单列表 -->
		<scroll-view scroll-y class="flex-1" style="background-color: #f5f5f5;">
			<block v-for="(tab,tabI) in tabBars" :key="tabI">
				<view class="position-relative" v-show="tabI === tabIndex" style="min-height: 440rpx;">
					<!-- 显示订单列表 -->
					<template v-if="tab.list.length>0">
						<view class="p-3" >
							<coupon v-for="(item,index) in tab.list" :key="index" :item="item" :index="index"></coupon>
						</view>
					</template>
					<!-- 默认 无数据 -->
					<template v-else>
						<no-thing :icon="tab.nothing" :msg="tab.msg"></no-thing>
					</template>
				</view>
			</block>
		</scroll-view>

	</view>
</template>

<script>
	import noThing from "@/components/common/no-thing-template.vue";
	import coupon from '@/components/order/coupon-template.vue'
	
	export default {
		components:{
			noThing,coupon
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '可用',
						id: 0, 
						nothing: 'no_pay',
						msg: '您还没有可用的优惠券',
						list: [{
							title: '第三季微信立减100元',
							startTime: '2020-10.01',
							endTime: '2020-11-01',
							price: 100,
							explain: '满300使用',
							status: true,
							disabled: false
						},{
							title: '第三季微信立减100元',
							startTime: '2020-10.01',
							endTime: '2020-11-01',
							price: 100,
							explain: '满300使用',
							status: true,
							disabled: true
						},{
							title: '第三季微信立减100元',
							startTime: '2020-10.01',
							endTime: '2020-11-01',
							price: 100,
							explain: '满300使用',
							status: true,
							disabled: true
						}]
					},{
						name: '已失效',
						id: 1, 
						nothing: 'no_pay',
						msg: '您还没有优惠券',
						list: [{
							title: '第三季微信立减100元',
							startTime: '2020-10.01',
							endTime: '2020-11-01',
							price: 100,
							explain: '满300使用',
							status: false,
							disabled: false
						},{
							title: '第三季微信立减100元',
							startTime: '2020-10.01',
							endTime: '2020-11-01',
							price: 100,
							explain: '满300使用',
							status: false,
							disabled: true
						}]
					}
				],
			}
		},
		methods: {
			// 切换选项卡
			changeTab(index){
				this.tabIndex = index
			}
		}
	}
</script>

<style scoped>
	.tab_active {
		border-bottom: 8rpx solid #fd6801!important;
		color: #fd6801!important;
		/* margin-bottom: -5rpx; */
	}

</style>
