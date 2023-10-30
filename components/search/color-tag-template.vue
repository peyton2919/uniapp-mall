<template>
	<view class="px-3 py-2 border d-inline-block m-1" :style="getStyle">
		{{item.name}}
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type: Object
			},
			index: {
				type: Number,
				default: 0
			},
			color: {
				type: Boolean,
				default: true
			}
		},
		computed:{
			getStyle(){
				if(!this.color){
					return `border: 0; background: #f5f5f5;`
				}
				let color = {
					borderColor: ['#eea6aa','#dd6a4b','#98d5d8','#9dbe93','#bccd99',
						'#FFE294','#93CDDD','#B3A2C7','#C3D69B','#D99694',
						'#95B3D7','#558ED5','#948A54'],
					background: ['#f8eae9','#ffbec6','#e8f6f6','#e4f5e2','#f2f6e8',
						'#FDEADA','#DBEEF4','#E6E0EC','#EBF1DE','#F2DCDB',
						'#DCE6F2','#C6D9F1','#DDD9C3'],
				}
					
				let index = Math.floor(Math.random()*color.borderColor.length)
				let borderColor = color.borderColor[index]
				let background = color.background[index]
				return `background: ${background}; border-color: ${borderColor};`
			}
		},
	}
</script>

<style>
</style>