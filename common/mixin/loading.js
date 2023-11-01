/**
 * 页面刚加载动画
 */
export default {
	data(){
		return {
			beforeReady: true,
		}
	},
	onReady(){
		this.$nextTick(()=>{
			setTimeout(()=>{this.beforeReady = false},500);
		})
		
	}
		
}