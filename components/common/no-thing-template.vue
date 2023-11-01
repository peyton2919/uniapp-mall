<template>
	<view class="position-absolute d-flex flex-column a-center j-center top-0 left-0 right-0 bottom-0"
		style="background: #f5f5f5;">
		<image :src="getIcon" mode="widthFix"
			style="width: 250rpx;"></image>
			<view style="color: #b2b2b2;">{{msg}}</view>
	</view>
</template>

<script>
	/**
	 * 没找到数据 {设置时外层要设置最低高度: min-height: 440rpx;}
	 * @property {String} icon 图片名称 默认: no_comment
	 * 		图片类型为 png 格式,并且该图片要放在 `/static/images/nothing/` 目录下
	 * @property {String} msg 提示信息 默认: 您还没有待付款订单
	 */
	export default {
		props:{
			icon: {
				type: String,
				default: 'no_comment'
			},
			msg: {
				type: String,
				default: '您还没有待付款订单'
			}
		},
		computed:{
			getIcon(){
				return `/static/images/nothing/${this.icon}.png`
			}
		},
	}
</script>

<style>
</style>