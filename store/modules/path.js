export default {
	state: {
		list: [
			{
				name:'Judy',
				phone: '135*****531',
				path: '广东省 广州市 白云区',
				detailPath: '三元里梓元岗千色皮具城',
				isDefault: false
			},{
				name:'Tom',
				phone: '136*****000',
				path: '福建省 福州市 仓山区',
				detailPath: '城门大街150号',
				isDefault: false
			}
		],
	},
	getters:{
		//  获取默认地址
		defaultPath:(state)=>{
			return state.list.filter(v=> v.isDefault)
		},
		// 
		
	},
	mutations: {
		// 创建收货地址
		createPath(state,item){
			state.list.unshift(item)
		},
		// 删除收货地址
		delPath(state,index){
			state.list.splice(index,1)
		},
		// 修改收货地址
		updatePath(state,{index,item}){
			// 实时更新
			for(let key in item){
				state.list[index][key] = item[key]
			}
		},
		// 取消默认地址
		removeDefault(state){
			state.list.forEach(v=>{
				if(v.isDefault){
					v.isDefault = false
				}
			})
		}
		
	},
	actions: {
		// 修改地址
		updatePathAction({commit},obj){
			if(obj.item.isDefault){
				commit('removeDefault')
			}
			commit('updatePath',obj)
		},
		// 增加地址
		createPathAction({commit},item){
			if(item.isDefault){
				commit('removeDefault')
			}
			commit('createPath',item)
		}
	}
}