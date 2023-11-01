<template>
	<!-- 登录 页面 -->
	<view>
		<!-- 导航栏 -->
		<uni-status-bar>
			<view class="d-flex a-center j-sb py-5 text-light-muted">
				<view class="iconfont icon-shanchu1 pl-3" @click="goBack"></view>
				<view class="font-md pr-3" @click="forget">忘记密码</view>
			</view>
		</uni-status-bar>
	
				
		<view class="text-center font-huge" style="padding-top: 130rpx; padding-bottom: 70rpx;">
			{{status ? '手机验证码登录':'账号密码登录'}}
		</view>
		
		<view class="px-2">
			<template v-if="status">
				<view class="mb-2 d-flex a-stretch px-0">
					<view class="border-bottom d-flex a-center j-center font px-2"
						:class="focusClass.phone?' input-border-color':''">+86</view>
					<input type="text" v-model="phone" placeholder="手机号" class="border-bottom uni-input p-2 flex-1"
						@focus="focus('phone')" @blur="blur('phone')"
						:class="focusClass.phone?' input-border-color':''">
				</view>
				<view class="mb-2 d-flex a-stretch px-0">
					<input type="text" v-model="code" placeholder="请输入验证码" class="border-bottom uni-input p-2"
						@focus="focus('code')" @blur="blur('code')"
						:class="focusClass.code?' input-border-color':''">
					<view class="border-bottom d-flex a-center j-center px-2 font-sm text-white" style="width: 180rpx;"
							:class="codeTime > 0 ? 'main-bg-disabled-gray':'main-bg-color'"
							@click="getCode">
						{{codeTime > 0 ? codeTime + ' 秒':'获取验证码'}}
					</view>
				</view>
			</template>
			
			<template v-else>
				<view class="mb-2">
					<input type="text" class="border-bottom mb-4 uni-input px-0"
						placeholder="请输入手机号/账号/邮箱" placeholder-class="text-light-muted"
						@focus="focus('username')" @blur="blur('username')"
						:class="focusClass.username?' input-border-color':''"
						v-model="username"/>
				</view>
				<view class="mb-2 d-flex a-stretch">
					<input type="text" class="border-bottom mb-4 uni-input px-0"
						placeholder="请输入密码" placeholder-class="text-light-muted"
						@focus="focus('password')" @blur="blur('password')"
						:class="focusClass.password?' input-border-color':''"
						v-model="password"/>
					<view class="border-bottom d-flex a-center j-center mb-4 pr-2 font text-secondary" @click="forget">忘记密码</view>
				</view>
			</template>
			
			<label class="checkbox d-flex a-center" @click="check = !check">
				<checkbox :check="check" color="#fd6801" ></checkbox>
				<text class="text-light-muted font ml-1">已阅读并同意 xxxx 协议</text>
			</label>
		</view>
		
		<submit-btn radius="200" :name="loading?'登录中...':'登录'" :disabled="disabled" @click="submit" :loading="loading"></submit-btn>
		
		<view class="d-flex a-center j-center pt-2 pb-5 ">
			<view class="text-primary  font-sm" @click="changeStatus">
				{{status ?'账号登录':'验证码登录'}}
			</view>
			<text class="text-muted mx-2">|</text>
			<view class="text-primary font-sm">登录遇到问题</view>
		</view>
		
		<view class="d-flex a-center j-center">
			<view style="height: 1rpx; background-color: #dddddd; width: 100rpx;"></view>
			<view class="mx-2 text-muted">社交账号登录</view>
			<view style="height: 1rpx; background-color: #dddddd; width: 100rpx;"></view>
		</view>
		
		<!-- 第三方登录 -->
		<other-login back></other-login>
		
	</view>
</template>

<script>
	import uniStatusBar from "@/components/uni-ui/uni-nav-bar/uni-status-bar.vue";
	import submitBtn from "@/components/common/submit-btn-template.vue";
	import otherLogin from "@/components/common/other-login-template.vue";
	
	export default {
		components:{
			uniStatusBar,submitBtn,otherLogin
		},
		data() {
			return {
				// 判断账号类型 手机验证码 true,否则 false
				status:false,
				focusClass: {
					username: false,
					password: false,
					phone: false,
					code:false
				},
				username: '',
				password: '',
				check: false,
				phone: '',
				code: '',
				// 验证码倒计时
				codeTime:0,
				loading:false,
				// 验证规则
				rules: {
					username: [
						{
							rule: /^[a-zA-A-Z]\w{5,17}$/,
							msg: '以字母开头,长度在6~18之间,只能包含字母、数字和下划线'
						}
					],
					password:[
						{
							rule: /^.{5,20}$/,
							msg: '密码长度必须为5~20之间的所有字符'
						}
					],
					phone:[
						{
							rule: /^1[34578]\d{9}$/,
							msg: '手机号码格式不正确'
						}
					]
				}
			}
		},
		computed:{
			disabled(){
				if((this.username === '' || this.password === '') &&
					(this.phone === '' || this.code === '')){
					return true;
				}else if (this.loading){
					return true;
				}
				
				return false;
			}
		},
		methods: {
			// 初始化表单
			__initForm(){
				this.username=''
				this.password=''
				this.phone=''
				this.code=''
			},
			// 切换登录方式
			changeStatus(){
				// 初始化表单
				this.__initForm()
				this.status = !this.status
			},
			// 获取验证码
			getCode(){
				// 表单验证
				if (!this.validate(key)) {return;}
				// 防止重复获取
				if (this.codeTime>0) {
					return;
				}
				// 请求数据
				this.$H.post('/sendcode',{
					phone:this.phone
				}).then(res=>{
					console.log(res);
					// 倒计时
					this.codeTime = 60
					let timer = setInterval(()=>{
						this.codeTime--
						if (this.codeTime === 0) {
							clearInterval(timer)
						}
					},1000)
				})

			},
			// 表单验证 true 表示 表单验证通过，否则 false
			validate(key){
				var pass = true
				this.rules[key].forEach((v)=>{
					// 验证失败
					if(!(v.rule).test(this[key])){
						pass = false;
						uni.showToast({ title: v.msg,icon:'none' });
						return false;
					}
				});
				return pass;
			},			
			// 登录
			submit(){
				console.log(this.check);

				let url;
				let data={}
				if(this.status){
					// 手机验证码登录
					if (!this.validate('phone')) {return;}
					url = '/phonelogin'
					data={
						phone:this.phone,
						code:this.code
					}
				}else{
					//账号密码登录
					if (!this.validate('username')) {return;}
					if (!this.validate('password')) {return;}
					url = '/login'
					data={
						username:this.username,
						password:this.password
					}
				}
				if(!this.check){
					return uni.showToast({
						title: '请先同意 《XXXX》协议',
						icon: 'none'
					});
				}
				this.loading = true
				setTimeout(()=>{
					this.loading=false
					uni.navigateBack({
						delta: 1
					});
				},2000)
								
				// this.loading=true
				// // 提交
				// this.$H.post(url,data).then(res=>{
				// 	this.loading=false
				// 	console.log(res);
				// 	// 修改 vuex 的 state
				// 	this.$store.commit('login',res.data)
				// 	// 提示和跳转 
				// 	uni.navigateBack({
				// 		delta: 1
				// 	});
				// 	uni.showToast({
				// 		title: '登录成功'
				// 	});
				// }).catch(err=>{
				// 	// 登录失败
				// 	this.loading=false
				// })
				
				// 登录成功处理
			},
			// 返回
			goBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			// 忘记密码
			forget(){
				
			},
			// 输入框聚焦
			focus(key){
				this.focusClass[key] = true
			},
			// 输入框失焦
			blur(key){
				this.focusClass[key] = false
			}
		}
	}
</script>

<style>

</style>
