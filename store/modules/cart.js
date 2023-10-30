export default {
	/**
	 * 保存对象信息, 全局共用的对象或属性
	 */
	state: {
		list: [
			{
				checked: false,
				id: 11,
				title: '商品标题111',
				cover: '/static/images/demo/list/4.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '颜色',
						selected: 0,
						list: [
							{name:'火焰红'},{name:'炭黑'},{name:'冰川兰'}
						]
					},{
						title: '容量',
						selected: 0,
						list: [
							{name:'64GB'},{name:'128GB'},{name:'256GB'}
						]
					},{
						title: '套餐',
						selected: 0,
						list: [
							{name:'标配'},{name:'套餐一'},{name:'套餐二'}
						]
					}
				],
				pprice: 3360,  // 多规格匹配,根据不同的选择计算出单价
				num: 2,
				minnum: 1,
				maxnum:10	//该数量最大商品数, 跟库存有关
			},{
				checked: false,
				id: 13,
				title: '商品标题222',
				cover: '/static/images/demo/list/5.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '颜色',
						selected: 1,
						list: [
							{name:'火焰红'},{name:'炭黑'},{name:'冰川兰'}
						]
					},{
						title: '容量',
						selected: 1,
						list: [
							{name:'64GB'},{name:'128GB'},{name:'256GB'}
						]
					},{
						title: '套餐',
						selected: 2,
						list: [
							{name:'标配'},{name:'套餐一'},{name:'套餐二'}
						]
					}
				],
				pprice: 560,  // 多规格匹配,根据不同的选择计算出单价
				num: 3,
				minnum: 1,
				maxnum:10	//该数量最大商品数, 跟库存有关
			},{
				checked: false,
				id: 14,
				title: '商品标题333',
				cover: '/static/images/demo/list/6.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '颜色',
						selected: 2,
						list: [
							{name:'火焰红'},{name:'炭黑'},{name:'冰川兰'}
						]
					},{
						title: '容量',
						selected: 2,
						list: [
							{name:'64GB'},{name:'128GB'},{name:'256GB'}
						]
					},{
						title: '套餐',
						selected: 1,
						list: [
							{name:'标配'},{name:'套餐一'},{name:'套餐二'}
						]
					}
				],
				pprice: 1560,  // 多规格匹配,根据不同的选择计算出单价
				num: 2,
				minnum: 1,
				maxnum:10	//该数量最大商品数, 跟库存有关
			},{
				checked: false,
				id: 11,
				title: '商品标题111',
				cover: '/static/images/demo/list/4.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '颜色',
						selected: 0,
						list: [
							{name:'火焰红'},{name:'炭黑'},{name:'冰川兰'}
						]
					},{
						title: '容量',
						selected: 0,
						list: [
							{name:'64GB'},{name:'128GB'},{name:'256GB'}
						]
					},{
						title: '套餐',
						selected: 0,
						list: [
							{name:'标配'},{name:'套餐一'},{name:'套餐二'}
						]
					}
				],
				pprice: 3360,  // 多规格匹配,根据不同的选择计算出单价
				num: 2,
				minnum: 1,
				maxnum:10	//该数量最大商品数, 跟库存有关
			},{
				checked: false,
				id: 13,
				title: '商品标题222',
				cover: '/static/images/demo/list/5.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '颜色',
						selected: 1,
						list: [
							{name:'火焰红'},{name:'炭黑'},{name:'冰川兰'}
						]
					},{
						title: '容量',
						selected: 1,
						list: [
							{name:'64GB'},{name:'128GB'},{name:'256GB'}
						]
					},{
						title: '套餐',
						selected: 2,
						list: [
							{name:'标配'},{name:'套餐一'},{name:'套餐二'}
						]
					}
				],
				pprice: 560,  // 多规格匹配,根据不同的选择计算出单价
				num: 3,
				minnum: 1,
				maxnum:10	//该数量最大商品数, 跟库存有关
			},{
				checked: false,
				id: 14,
				title: '商品标题333',
				cover: '/static/images/demo/list/6.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '颜色',
						selected: 2,
						list: [
							{name:'火焰红'},{name:'炭黑'},{name:'冰川兰'}
						]
					},{
						title: '容量',
						selected: 2,
						list: [
							{name:'64GB'},{name:'128GB'},{name:'256GB'}
						]
					},{
						title: '套餐',
						selected: 1,
						list: [
							{name:'标配'},{name:'套餐一'},{name:'套餐二'}
						]
					}
				],
				pprice: 1560,  // 多规格匹配,根据不同的选择计算出单价
				num: 2,
				minnum: 1,
				maxnum:10	//该数量最大商品数, 跟库存有关
			}
		],
		// 选中列表(存放选中的 id)
		selectedList: [],
		// popup 显示
		popupShow: 'none',
		// popup 索引 -1 表示没有商品
		popupIndex: -1,
	},
	// 计算属性
	getters: {
		// 判断是否全选
		checkedAll:(state)=>{
			return state.list.length === state.selectedList.length
		},
		// 合计
		totalPrice:(state)=>{
			var total = 0
			state.list.forEach(v=>{
				// 判断当前 id 是否在 selectedList 列表里
				if(state.selectedList.indexOf(v.id) > -1){
					total += v.pprice * v.num
				}
			})
			return total
		},
		// 禁用全选
		disableSelectAll:(state)=>{
			return state.list.length === 0
		},
		// 拿到当前需要修改属性的商品
		popupData:(state)=>{
			return state.popupIndex > -1 ? state.list[state.popupIndex] : {}
		}
	},
	// 存放同步方法
	mutations: {
		// 选中/取消选中某个商品
		selectItem(state,index){

			let id = state.list[index].id
			let i = state.selectedList.indexOf(id)
			// 之前是选中, 取消选中
			if(i > -1){
				// 取消当前商品选中状态
				state.list[index].checked = false
				// 移除选中列表中的当前 商品
				return state.selectedList.splice(i,1)
			}
			// 之前没选中,
			state.list[index].checked = true
			state.selectedList.push(id)
		},
		// 全选
		selectAll(state){
			state.selectedList = state.list.map(v => {
				// 设置选中状态
				v.checked = true
				return v.id
			})
		},
		// 取消全选
		unSelectAll(state){
			state.list.forEach(v => {
				// 设置选中状态
				v.checked = false
			})
			state.selectedList = []
		},
		// 删除选中
		delProducts(state){
			state.list = state.list.filter(v =>{
				return state.selectedList.indexOf(v.id) === -1
			})
		},
		// 初始化 popupIndex
		initPopupIndex(state,index){
			state.popupIndex = index
		},
		// 加入购物车
		addProductToCart(state,product){
			state.list.unshift(product)
		}
		
	},
	// 存放异步方法
	actions: {
		doSelectAll({commit,getters}){
			getters.checkedAll ? commit('unSelectAll') : commit('selectAll')
		},
		doDelProducts({commit}){
			uni.showModal({
				content: '是否删除选中',
				success: res => {
					if(res.confirm){
						commit('delProducts')
						uni.showToast({
							title: '删除成功'
						});
					}
				}
			});
		},
		// 显示  popup
		doShowPopup({state,commit},index){
			commit('initPopupIndex',index)
			state.popupShow = 'show'
		},
		// 隐藏 popup
		doHidePopup({state}){
			state.popupShow = 'hide'
			setTimeout(()=>{
				state.popupShow = 'none'
				commit('initPopupIndex',-1)
			},200)
		}
		
	}
}