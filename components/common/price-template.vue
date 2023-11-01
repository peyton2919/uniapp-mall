<template>
	<view class="d-flex main-text-color font-md line-h"
		:class="priceSize + ' ' + color">
		<text class="a-self-start font-sm" :class="unitSize">￥</text>
		<slot>{{convert}}</slot>
	</view>
</template>

<script>
	/**
	 * 单价模板
	 * @property {Number,String} price 单价
	 * @property {String} priceSize 单价字体大小(写class样式)
	 * @property {String} unitSize 单位大小(写class样式)
	 * @property {String} color 字体颜色(写class样式)
	 * 	  @value 默认: main-text-color (写class样式)
	 * @returns 返回带二位小数点
	 */
	export default {
		props:{
			price:{
				type: [Number,String],
				default: 0.00
			},
			priceSize: {
				type: String,
				default: 'font-md'
			},
			unitSize: {
				type: String,
				default: 'font-sm'
			},
			color: {
				type: String,
				default: 'main-text-color'
			}
		},
		computed:{
			// 转换单价
			convert(){		
				return parseFloat(this.price).toFixed(2);
			}
		}
	}
</script>

<style>
</style>