<template>
	<!-- 4. 购物车页面 -->
	<view style="background: #f5f5f5">
		<!-- 导航栏 -->
		<uni-nav-bar :right-text="isedit ? '完成' : '编辑'" title="购物车" statusBar fixed :shadow="false" @clickRight="isedit = !isedit"></uni-nav-bar>

		<!-- 购物车为空 -->
		<view class="py-5 d-flex a-center j-center bg-white" v-if="disableSelectAll">
			<view class="iconfont icon-gouwuche text-light-muted font-huge"></view>
			<text class="text-light-muted mx-2">购物车还是为空</text>
			<view class="px-4 py-2 border border-light-secondary rounded" hover-class="bg-light-secondary">去逛逛</view>
		</view>

		<!-- 购物车商品列表 -->
		<view class="bg-white px-2" v-else>
			<view class="d-flex a-center py-2 border-bottom border-light-secondary" v-for="(item, index) in list" :key="index">
				<label class="radio d-flex a-center j-center flex-shrink" style="width: 70rpx; height: 70rpx" @click="selectItem(index)">
					<radio :value="item.id" :checked="item.checked" color="#fd6801" />
				</label>

				<image :src="item.cover" mode="widthFix" style="height: 150rpx; width: 150rpx" class="rounded flex-shrink p-2 border border-light-secondary"></image>

				<!-- 右侧 -->
				<view class="flex-1 d-flex flex-column pl-2">
					<view class="text-dark font-lg">{{ item.title }}</view>
					<!-- 属性规格 style="height: 100rpx;"  height: 70rpx;-->
					<view class="d-flex text-light-muted mb-2 py-1" :class="isedit ? '  bg-light-secondary' : ''" @tap.stop="isedit ? doShowPopup(index) : false">
						<text class="mr-1" v-for="(attr, attrIndex) in item.attrs" :key="attrIndex">
							{{ attr.list[attr.selected].name }}
						</text>
						<view class="iconfont icon-bottom font ml-auto" v-if="isedit"></view>
					</view>
					<view class="d-flex j-sb">
						<price :price="item.pprice"></price>
						<view class="a-self-end">
							<uni-number-box :min="item.minnum" :max="item.maxnum" :value="item.num" @change="item.num = $event" />
						</view>
					</view>
				</view>
			</view>	
		</view>
		
		<!-- 为你推荐 -->
		<view class="text-center main-text-color font-md font-weight mt-5"> 为你推荐</view>
		<view class="position-relative d-flex a-center j-center text-secondary mb-3 pt-3">
			<view class="px-3 position-absolute" style="background: #f5f5f5; z-index: 2;">买的人还买了</view>
			<view class="position-absolute" style="height: 1upx; left: 0; right: 0; background-color: #dddddd;"></view>
		</view>
		<view class="row j-sb bg-white">
			<product-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index"></product-list>
		</view>
		
		<!-- 占位 -->
		<view style="height: 105rpx"></view>
		<!-- 合计 -->
		<view class="d-flex a-center position-fixed left-0 right-0 bottom-0 border-top border-light-secondary a-stretch bg-white" style="height: 100rpx">
			<label class="radio d-flex a-center j-center flex-shrink" style="width: 120rpx" @click="doSelectAll">
				<radio color="#fd6801" :checked="checkedAll" :disabled="disableSelectAll" />
			</label>

			<!--  -->
			<template v-if="!isedit">
				<view class="flex-1 d-flex a-center font-md">
					合计
					<price :price="totalPrice" class="pl-1"></price>
				</view>
				<view class="flex-1 d-flex a-center j-center main-bg-color text-white font-md" hover-class="main-bg-hover-color" style="height: 100%">结算</view>
			</template>
			<!--  -->
			<template v-else>
				<view class="flex-1 d-flex a-center j-center font-md main-bg-color text-white" style="height: 100rpx">移入收藏</view>
				<view class="flex-1 d-flex a-center j-center bg-danger text-white font-md" style="height: 100rpx" hover-class="main-bg-hover-color" @tap="doDelProducts">删除</view>
			</template>
		</view>

		<!-- 属性模态框 -->
		<popup-template :popupClass="popupShow" @hide="doHidePopup">
			<!-- 商品信息高度 275rpx 图片 180 *180 -->
			<view class="d-flex a-center" style="height: 275rpx">
				<image src="/static/images/demo/list/1.jpg" mode="widthFix" style="height: 180rpx; width: 180rpx" class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="fong-lg" unitSize="font" price="2365"></price>
					<view class="d-block">
						<text class="mr-1" v-for="(attr, attrIndex) in popupData.attrs" :key="attrIndex">
							{{ attr.list[attr.selected].name }}
						</text>
					</view>
				</view>
			</view>
			<!-- 表单部分高度 660rpx  -->
			<scroll-view scroll-y class="w-100" style="height: 660rpx">
				<card title="颜色" :titleWeight="false" :showHeadBorderBottom="false" v-for="(item, index) in popupData.attrs" :key="index">
					<radio-group-template :label="item" :selected.sync="item.selected"></radio-group-template>
				</card>

				<view class="d-flex j-sb py-2 a-center border-top border-light-secondary" style="height: 100rpx">
					<text>购买数量</text>
					<uni-number-box :min="1" :value="popupData.num" @change="popupData.num = $event"></uni-number-box>
				</view>
			</scroll-view>
			<!-- 按钮高度 100rpx -->
			<view
				class="main-bg-color text-white font-md d-flex j-center a-center"
				hover-class="main-bg-hover-color"
				style="height: 100rpx; margin-left: -25rpx; margin-right: -25rpx"
				@tap.stop="doHidePopup"
			>
				确定
			</view>
		</popup-template>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import price from '@/components/common/price-template.vue';
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';
import radioGroupTemplate from '@/components/common/radio-group-template.vue';
import popupTemplate from '@/components/common/popup-template.vue';
import card from '@/components/common/card-template.vue';
import productList from "@/components/common/product-list-template.vue"
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
	components: {
		uniNavBar,
		price,
		uniNumberBox,
		radioGroupTemplate,
		popupTemplate,
		card,
		productList,
	},
	data() {
		return {
			// 是否为编辑
			isedit: false,
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
		};
	},
	computed: {
		...mapState({
			list: (state) => state.cart.list,
			popupShow: (state) => state.cart.popupShow
		}),
		...mapGetters(['checkedAll', 'totalPrice', 'disableSelectAll', 'popupData'])
	},
	methods: {
		...mapActions(['doSelectAll', 'doDelProducts', 'doShowPopup', 'doHidePopup']),
		...mapMutations(['selectItem']),
		hide(key) {
			this.popup[key] = 'hide';
			setTimeout(() => {
				this.popup[key] = 'none';
			}, 200);
		},
		show(key) {
			this.popup[key] = 'show';
		}
	}
};
</script>

<style></style>
