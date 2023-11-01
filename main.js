import App from './App'

// 引用全局组件
import divider from "./components/common/divider-template.vue"
// 引用全局加载动画
import loading from "./components/common/loading-template.vue"
// 引用全局加载动画
import loadingPlus from "./common/mixin/loading-plus-template.vue"
// 引用全局工具类
import $U from "./common/js/utils.js"


// 引入全局状态管理器 store
import store from "./store"

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'


Vue.config.productionTip = false

// 注册全局组件
Vue.component('divider', divider)
// 引用全局加载动画
Vue.component('loading', loading)
// 引用全局加载动画
Vue.component('loading-plus', loadingPlus)
// 引入全局状态管理器 store
Vue.prototype.$store = store
Vue.prototype.$U = $U


App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	// 注册全局组件
	app.component('divider', divider)
	// 引用全局加载动画
	app.component('loading', loading)
	// 引用全局加载动画
	app.component('loading-plus', loadingPlus)

	// 引入全局状态管理器 store
	app.use(store)
	app.use($U)
	return {
		app
	}
}
// #endif