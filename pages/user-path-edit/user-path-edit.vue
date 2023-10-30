<template>
	<!-- 编辑收货地址 -->
	<!-- 5.1.1 搜索列表页面
		1. 点击 底部导航栏 我的; 
		2. 跳转到 mine 页面, 点击 更多设置;
		3. 跳转到 user-set 页面, 点击 收货地址;
		4. 跳转到 user-path-list 页面, 点击 原生导航栏 右侧 +;
		5. 跳转到 本页面{user-path-edit};
		 -->
	<view>
		<view class="p-2 border-bottom d-flex a-center">
			<view class="font-md text-secondary mr-1 flex-shrink">收货人:</view>
			<input type="text" v-model="form.name" class="px-1 font-md flex-1"/>
		</view>
		<view class="p-2 d-flex a-center">
			<view class="font-md text-secondary mr-1 flex-shrink">手机号码:</view>
			<input type="text" v-model="form.phone" class="px-1 font-md flex-1"/>
		</view>
		<divider />
		<view class="p-2 border-bottom d-flex a-center">
			<view class="font-md text-secondary mr-1 flex-shrink">所在地区:</view>
			<input type="text" :value="form.path" class="px-1 font-md flex-1" disabled 
				placeholder="请选择所在地区"
				@click="showMulLinkageThreePicker"/>
			
			<mpvue-city-picker :themeColor="themeColor"
				ref="mpvueCityPicker" :pickerValueDefault="pickerValue"
				@onConfirm="onConfirm"></mpvue-city-picker>
		</view>
		<view class="p-2 d-flex a-center">
			<view class="font-md text-secondary mr-1 flex-shrink">详细地址:</view>
			<input type="text" v-model="form.detailPath" class="px-1 font-md flex-1"/>
		</view>
		<divider />
		<view class="p-2 d-flex a-center">
			<view class="font-md text-secondary mr-1 flex-shrink">设为默认地址:</view>
			<switch :checked="form.isDefault" class="ml-auto" color="#fd6801" 
				@change="form.isDefault = $event.detail.value"/> 
		</view>
		
		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2"
				hover-class="main-bg-hover-color" @click="submit">
				保 存
			</view>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue";
	import { mapActions } from 'vuex';
	
	export default {
		components:{
			mpvueCityPicker
		},
		data() {
			return {
				// 三级联动 主题色
				themeColor: '#007aff',
				// 默认选择
				pickerValue: [0,0,1],
				isedit: false,
				index: -1,
				form: {
					name:'',
					phone: '',
					path: '',
					detailPath: '',
					isDefault: false
				}
			}
		},
		onLoad(e){
			
			if(e.data){
				let obj = JSON.parse(e.data)
				this.form = obj.item
				this.index = obj.index
				this.isedit = true
				uni.setNavigationBarTitle({
					title: '修改收货地址'
				})
			}
		},
		// 监听返回
		onBackPress() {
			if(this.$refs.mpvueCityPicker.showPicker){
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		// 页面卸载
		onUnload() {
			if(this.$refs.mpvueCityPicker.showPicker){
				this.$refs.mpvueCityPicker.pickerCancel();
			}
		},
		methods: {
			...mapActions([
				'updatePathAction','createPathAction'
			]),
			
			// 三级联动 确定
			onConfirm(e){
				this.form.path = e.label
				this.pickerValue = e.value
			},
			// 显示三级联动选择
			showMulLinkageThreePicker(){
				this.$refs.mpvueCityPicker.show()
			},
			submit(){
				// 验证表单
				// 修改收货地址
				if(this.isedit){
					this.updatePathAction({
						index: this.index,
						item: this.form
					})
					uni.showToast({ title: '收货地址修改成功' });
					uni.navigateBack({ delta: 1 });
					return;
				}
				// 创建收货地址
				this.createPathAction(this.form)
				uni.showToast({ title: '收货地址创建成功' });
				uni.navigateBack({ delta: 1 });
			}
		}
	}
</script>

<style>

</style>
