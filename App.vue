<script>
export default {
	onLaunch: function () {
		console.log('App Launch');
	},
	onShow: function () {
		console.log('App Show');
	},
	onHide: function () {
		console.log('App Hide');
	}
	/* nvue 与 vue 之间的通讯
	 * 	1. 在 nvue 页面用 uni.postMessage({可以传对象});
	 * 	2. 在 App.vue 中 onUniNViewMessage 监听 postMessage 发过来的值数据;
	 * 	3. 在 onUniNViewMessage 中处理一些逻辑问题;
	 * 	4. 可以在 onUniNViewMessage 方法中放一个全局通知 uni.$emit('事件名',数据);
	 * 	5. 在要处理的页面 onLoad 时, 创建一个 uni.$on('事件名', e=>{ 回调事件 });
	 *  vue 与 uvue 之间通讯
	 * 	1. 在 vue 中可能通过 let pages = getCurrentPages() 获取所有的页面, 首页下标为 0 pages[0];
	 * 		pages[0].$getAppWebview() 可以获取的索引;
	 *  2. 在 vue 里使用 plus.webview.postMessageToUniNView(data,nvueId) 发消息, data 为 JSON格式;
	 * 		naveId 为 nvue 在 webview 的 id;
	 * 	3. 在 nvue 里引用 const globalEvent = weex.requireModule('globalEvent') 模板监听 plusMessage 事件;
	 * 		globalEvent.addEventListener('plusMessage',e=>{ })
	 */
	// onUniNViewMessage: (e) => {

	// }
};
</script>

<style>
/*每个页面公共css */
/* 引入 官方 ui 库 */
@import '@/common/css/uni.css';
/* 引入 第三方动画库 */
@import '@/common/css/animate.css';
/* 引入 第三方图标库 */
@import '@/common/css/icon.css';
/* 引入 公共样式 */
@import '@/common/css/common.css';
/* 引入 自定义样式 */
@import '@/common/css/mall.css';
/* 引入 尺寸样式 */
@import '@/common/css/size.css';
</style>
