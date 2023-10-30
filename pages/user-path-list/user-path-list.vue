<template>
	<!-- 5.1.1 搜索列表页面
		1. 点击 底部导航栏 我的; 
		2. 跳转到 mine 页面, 点击 更多设置;
		3. 跳转到 user-set 页面, 点击 收货地址;
		4. 跳转到 本页面{user-path-list};
		 -->
	<view>
		<!-- @click="swipeClick($event, index)"   @change="swipeChange($event, index)"-->
		<block v-for="(item,index) in list" :key="index">
			<uni-swipe-action ref="swipeAction">
				<uni-swipe-action-item :right-options="options" @click="bindClick($event,index)">
					<uni-list-item showArrow clickable showBorderBottomLine >
						<view class="text-secondary">
							<view class="d-flex a-center">
								<text class="main-text-color">{{item.name}}</text>
								{{item.phone}}
								<text class="main-text-color" v-if="item.isDefault">[默认]</text>
							</view>
							<view class="">
								{{item.path}}
							</view>
							<view class="">
								{{item.detailPath}}
							</view>
						</view>
					</uni-list-item>
			</uni-swipe-action-item>
			</uni-swipe-action>
		</block>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import uniSwipeActionItem from "@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue";
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue';
	import { mapState,mapMutations } from 'vuex';
	
	export default {
		components: {
			uniListItem,uniSwipeActionItem,uniSwipeAction
		},
		data() {
			return {
				
				options: [{
						text: '修改',
						style: { backgroundColor: '#007aff'}
					},{
						text: '删除',
						style: { backgroundColor: '#dd524d'}
					}
				],
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				uni.navigateTo({
					url: '/pages/user-path-edit/user-path-edit'
				});
			}
		},
		computed:{
			...mapState({
				list:state=>state.path.list
			}),
		},
		methods: {
			...mapMutations([
				'delPath'
			]),
			bindClick(e,index) {
				switch (e.index){
					case 0:  // 修改
						let obj = JSON.stringify({
							index:index,
							item: this.list[index]
						})
						uni.navigateTo({
							url: '/pages/user-path-edit/user-path-edit?data=' + obj
						})
						break;
					case 1:  // 删除
						uni.showModal({
							content: '确定要删除收货地址？',
							success: (res) => {
								if(res.confirm){
									this.delPath(index)
									uni.showToast({
										title: '收货地址删除成功',
										icon: 'none'
									})
								}
							}
						})					
						break;
				}
				
			}
		}
	}
</script>

<style>

</style>
