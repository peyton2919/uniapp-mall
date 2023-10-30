<template>
	<!-- 写基础卡片组件 -->
	<view class="card">
		<!-- 标题 -->
		<view v-if="showHead" class="px-3 main-border-color"
			:class="getHeadClass">		
			<slot name="head">
				<text v-if="title" class="font-lg"
					:class="titleWeight ? 'font-weight' : ''">
					{{title}}
				</text>
			</slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass" :style="bodyStyle">
			<image v-if="cover" :src="cover" mode="widthFix"></image>
			<!-- 插槽 -->
			<slot />
		</view>
	</view>
</template>

<script>
	
	/**
	 * <pre>
	 * 卡片模板
	 * 头部有个插槽 {name=head}
	 * 主体有个插槽
	 * </per>
	 * @property {String} title 标题
	 * @property {String} cover 封面
	 * @property {Boolean} showHead 是否显示头部 默认:true
	 * 	 @value true 显示
	 *   @value false 不显示
	 * @property {Boolean} showHeadBorderBottom 是否显示头部下边线 默认:true
	 * 	 @value true 显示
	 *   @value false 不显示 
	 * @property {Boolean} showBodyPadding 是否给 body 加 padding 默认:false 不添加
	 * 	 @value true 添加
	 *   @value false 不添加 
	 * @property {Boolean} titleWeight 标题是否加粗 默认:true 加粗
	 * 	 @value true 加粗
	 *   @value false 不加粗   
	 * @property {String} bodyStyle body 样式 {写成字符串格式}
	 */
	export default {
		props:{
			title:{
				type: String,
				default: ''
			},
			cover:{
				type: String,
				default: ''
			},
			showHead:{
				type: Boolean,
				default: true
			},
			// 是否显示下边线
			showHeadBorderBottom: {
				type: Boolean,
				default: true
			},
			// 是否给 body 加 padding
			showBodyPadding: {
				type: Boolean,
				default: false
			},
			//  标题是否加粗
			titleWeight: {
				type: Boolean,
				default: true
			},
			bodyStyle: {
				type: String,
				default: ''
			}
		},
		computed:{
			getHeadClass(){
				let shbb = this.showHeadBorderBottom ? 'border-bottom':''
				return `${shbb}`
			},
			getBodyClass(){
				let sbp = this.showBodyPadding ? 'p-2':''
				return `${sbp}`
			}
		}
	}
</script>

<style>
</style>