<template>
	<!-- 提交按钮 -->
	<view class="btn-class-view" :class="viewClass">
		<button type="primary"
			:style="` width: ${size}%; border-radius: ${radius}rpx; border: 0;`"
			:disabled="disabled"
			:class="[disabled ? 'btn-bg-disabled':background,btnClass]"
			:loading="loading"
			:hover-class="hoverClass"
			@click="submit">
			{{name}}
		</button>
	</view>
</template>

<script>
	/**
	 * <h3>自定义按钮 组件</h3>
	 * @description 按钮 组件 主要用于提交事件
	 * @property {String} name 按钮标题名称
	 * @property {Boolean} disabled 是否可点击 默认: false 可用
	 * 	@value false 按钮状态可用
	 *  @value true 按钮状态不可用
	 * @property {Number|String} size 按钮宽度[单位: 百分比;数值越大越宽] 默认: 100 [取值范围 10~100]
	 * @property {Number|String} radius 按钮边框半径[单位: rpx] 默认: 0 
	 * @property {String} background 按钮背景颜色 写法: class 样式
	 * @property {String} btnClass 按钮样式 写法: class 样式
	 * @property {String} viewClass 最外层 view 样式 写法: class 样式
	 * @property {String} hoverClass 按钮点击样式 写法: class 样式
	 * 	@value 在样式要加 [type=primary] 样式格式: btn-hover-color[type=primary] {样式内容}
	 * @event {Function} click 按钮点击 事件
	 */
	export default {
		props:{
			// 按钮标题名称
			name:{
				type:String,
				default:'提交'   // 退出登录
			},
			// 是否可点击，false 按钮状态可用，true 按钮状态不可用，默认为 false 可用
			disabled:{
				type:Boolean,
				default:false
			},
			// 按钮宽度[百分比] 默认: 100 [取值范围 10~100]
			size:{
				type:[Number,String],
				default:100
			},
			radius:{
				type:[Number,String],
				default: 0
			},
			//
			loading:{
				type:Boolean,
				default:false
			},
			// 按钮背景颜色
			background: {
				type: String,
				default: 'btn-bg-color'
			},
			// 按钮样式
			btnClass: {
				type: String,
				default: 'btn-style-submit'
			},
			// 最外层 view 样式
			viewClass: {
				type: String,
				default: ' pt-5'
			},
			// 点击样式
			hoverClass: {
				type: String,
				default: 'btn-bg-hover'
			}
		},
		methods:{
			// 点击事件
			submit(){
				this.$U.navigate('ax',{name:"judy",age:8})
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	.btn-bg-color { background-color: #FD6801!important; }
	.btn-bg-disabled { background-color: gray!important; }
	.btn-style-submit { left: 0;right: 0;bottom: 0;color: #ffffff!important; }
	.btn-class-view { padding: 20rpx 30rpx; }
	.btn-bg-hover{ background-color: rgba(253,104,1,0.85)!important;color: rgba(255, 255, 155, 0.6);border-color: #FD6837!important; }
	.btn-bg-white { background-color: #ffffff!important;color: #333333;}
	.btn-bg-white-hover[type=primary]{ background-color: lightgray!important;color: rgba(49, 51, 50, 0.6);border-color: #313332!important; }
</style>