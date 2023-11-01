export default {
	// 监听网络
	isNetwork(){
		let __func = (res) => {
			if (res.networkType === 'none') {
				uni.showToast({
					title: '当前处于断网状态,请先连接网络',
					icon:'none'
				});
			}					
		}
		uni.getNetworkType({
			success: __func
		});
		uni.onNetworkStatusChange(__func);
	},
	// 热更新
	update(){
		// #ifdef APP-PLUS
		plus.runtime.getProperty(plus.runtime.appid,(widgetInfo)=>{
			uni.request({
				url:'https://ceshi.dishait.cn/api/v1/update',
				data:{
					version:widgetInfo.version,
					name:widgetInfo.name
				},
				success: (restult) => {
					var data = restult.data;
					if (data.update && data.wgtUrl) {
						uni.downloadFile({
							url:data.wgtUrl,
							success: (downloadResult) => {
								if (downloadResult.statusCode === 200) {
									plus.runtime.install(downloadResult.tempFilePath,{
										force:false
									},function(){
										console.log('install success...');
										plus.runtime.restart();
									},function(e){
										console.error('install fail...');
									});
								}
							}
						});
					} 
				}
			});
		});
		// #endif
	},
	
	/**
	 * <h4>判断对象是否为空</h4>
	 * @param {Object} obj 要判断的对象
	 * @returns 为空返回 true, 否则取反
	 */
	isEmptyObj(obj){
		return Object.keys(obj).length === 0;
	},
	// 数组置顶
	__toFirst(arr,index){
		if(index != 0){
			// arr.unshift(arr,splice(index,1)[0])
			let _tmp = arr[index]
			arr.splice(index,1)
			arr.unshift(_tmp)
		}
		return arr;
	},

	/**
	 * 页面跳转
	 * @param {Object} url 链接地址名称
	 * @param {Object} obj 需要传递的对象
	 * @param {Object} options 选项对象 {data: 'data'} 默认空为时 key='data'
	 * @description `/pages/xxx/xxx?data={}`
	 */
	navigate(url,obj,options){
		let _pName = (options ? (options.data ? options.data :'data') : 'data')
		let _path = `/pages/${url}/${url}`
		if(obj){
			_path += `?${_pName}=${JSON.stringify(obj)}`
		}
		uni.navigateTo({
			url: _path,
		});
		
	}
	
	
}