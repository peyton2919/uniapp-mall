<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入 官方 ui 库 */
	@import "@/common/css/uni.css";
	/* 引入 第三方动画库 */
	@import "@/common/css/animate4.1.1.min.css";
	/* 引入 第三方图标库 */
	@import "@/common/css/icon.css";
	/* 引入 公共样式 */
	@import "common/css/common.css";
	/* 引入 自定义样式 */
	@import "@/common/css/mall.css";
	/* 引入 尺寸样式 */
	@import "@/common/css/size.css";
</style>
