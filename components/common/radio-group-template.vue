<template>
	<view class="row">
		<view class="span24-8 px-2 mb-2" v-for="(item,index) in label.list" :key="index">
			<view class="rounded border bg-light-secondary px-2 py-1 font-md text-center "
				:class="label.selected === index ? 'radio-active':'border-light-secondary'"
				@tap="changeRadio(index)">
				{{item.name}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			label: {
				type: Object
			}
		},
		methods:{
			changeRadio(index){
				// this.$emit('change',index)
				this.$emit('update:selected',index)
			}
		}
	}
</script>

<style scoped>
	.radio-active {
		background: #fce0d5!important;
		color: #eb7320!important;
		border-color: #eb7320!important;
	}
</style>