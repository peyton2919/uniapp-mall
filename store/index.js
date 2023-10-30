import Vue from "vue"
import Vuex from "vuex"

import cart from "@/store/modules/cart.js";
import path from "@/store/modules/path.js";

Vue.use(Vuex)

/**
 * store 使用方法
 * 在项目中创建一个 store 目录, 并在该目录下创建一个 index.js 文件;
 * 在 main.js 中引入 index.js
 * 		import store from "./store"  //如果名称不是 index.js 要在store 下跟 ./store/xx.js
 * 		在 vue2 中 Vue.prototype.$store = store 注册
 *  	在 vue3 中 app.use(store) 注册
 * 1. store 使用:
 * 		第一种使用: 直接用 {this.$store.state.[属性名称或对象名称]} 获取;
 * 		第二种使用: 在使用的 vue 文件中引入  
 * 			import {mapStore} from 'vue'
 * 			在 vue 页面 computed 方法中
 * 			1)、computed:{
 *				...mapStore({xx:state=state.xx}),
 *			},
 * 			2)、computed:{
 *				...mapStore({ xx:'xx'})		// 'xx' 对象 state 里的字段, xx 在本页面用 this.xx 调用
 *			}, 
 * 			3)、computed:mapStore({xx:'xx'}), // {} 中写法可以是 1)、2)写法都可以;
 * 2. getters 使用:
 * 		在 getters 中定义一个方法 xxxx(){}
 * 		第一种使用方式: 在页面中调用 this.$store.getters.xxxx
 * 		第二种使用方式: 在页面上 引用 import {mapGetters} from 'vuex'
 * 			在 页面 computed 方法引入 数组或对象
 * 			...mapGetters({
 *			 	xxxx, 'xxxx'	//  xxxx 名称可以在本页面中用 this.xxxx 调用; 'xxxx' 代表 index.js  mapGetters 中的方法;
 * 			}) 
 * 			或 ...mapGetters['xxxx'] 	// 在页面直接用 this.xxxx
 * 
 * 3. mutations 使用:
 * 		在 mutations 中定义一个方法 xxxx(pp){} 	// pp 为参数
 * 		第一种使用方式: 在页面 methods 方法中调用 this.$store.commit('xxxx',pp)
 * 		第二种使用方式: 在页面上 引用 import {mapMutations} from 'vuex'
 * 			在 页面 methods 方法引入 数组或对象
 * 			...mapMutations({
 *			 	xxxx, 'xxxx'	//  xxxx 名称可以在本页面中用 this.xxxx 调用; 'xxxx' 代表 index.js  mapMutations 中的方法;
 * 			})  
 * 			或 ...mapMutations['xxxx'] 	// 在页面直接用 this.xxxx
 * 4. actions: 使用：
 * 		在 actions 中定义一个方法
 * 		AsyncInc(context){  }  // context 等同于页面 this.$store.commit() , context 有context.commit 方法
 *		第一种使用方式: 在页面上直接可以调用: this.$store.dispatch('AsyncInc')
 * 		第二种使用方式: 在页面上 引用 import {mapActions} from 'vuex'
 * 			在 页面 methods 方法引入 数组或对象
 * 			...mapActions({
 *			 	xxxx, 'xxxx'	//  xxxx 名称可以在本页面中用 this.xxxx 调用; 'xxxx' 代表 index.js  mapActions 中的方法;
 * 			})  
 * 			或 ...mapActions['xxxx'] 	// 在页面直接用 this.xxxx
 * 
 * 使用模块化时,
 *  只是在 state 调用时有区别 
 * 		...mapStore({xx:state=state.模块名称.xx}),
 * 	其他几个方法调用和引用都一样
 */
export default new Vuex.Store({
	/**
	 * 配置多模块
	 */
	modules:{
		cart,path
	},
	
	/**
	 * 保存对象信息, 全局共用的对象或属性
	 */
	// state: {
	// 	user:{}
	// },
	// // 计算属性
	// getters: {
		
	// },
	// // 存放同步方法
	// mutations: {
		
	// },
	// // 存放异步方法
	// actions: {
		
	// }
})