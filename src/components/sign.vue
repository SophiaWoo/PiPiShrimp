<template>
	<div class="sign">
		<el-card class="box-card" v-bind:class="{ signin: isSignin, signup: !isSignin }">
		    <el-tabs v-model="activeName" @tab-click="tabClickHandler">
		        <el-tab-pane label="Sign In" name="Signin">
    	        	<el-form label-width="80px" class="signin-form">
    	        		<el-form-item 
    			        	v-for="item in signInForm" 
    			        	:label="item.label" 
    			        	:key="item.key"
    			        	:prop="item.key"
    			        	:rules="item.rules">
    		        		<el-input size="small" v-model="signInData[item.key]"></el-input>
    		        	</el-form-item>
    	        	</el-form>
    	        	<el-row type="flex" justify="end">
    	        	    <el-button type="primary" class="signin-btn" @click="signInHandler">登录</el-button>
    	        	</el-row>
		        </el-tab-pane>
		        <el-tab-pane label="Sign Up" name="Signup">
		        	<el-form label-width="80px" class="signup-form">
		        		<el-form-item 
				        	v-for="item in signUpForm" 
				        	:label="item.label" 
				        	:key="item.key"
				        	:prop="item.key"
				        	:rules="item.rules">
			        		<el-input size="small" v-model="signUpData[item.key]"></el-input>
			        	</el-form-item>
			        	<el-form-item label="是否打开座位聊天功能" label-width="152px">
			        		<el-switch
			        		  v-model="signUpData['iChat']"
			        		  on-color="#13ce66"
			        		  off-color="#ff4949">
			        		</el-switch>
			        	</el-form-item>
		        	</el-form>
		        	<el-row type="flex" justify="end">
		        	    <el-button type="primary" @click="signUpHandler">提交</el-button>
		        	    <el-button>重置</el-button>
		        	</el-row>
		        </el-tab-pane>
		    </el-tabs>
		</el-card>
	</div>
</template>

<script>
    import Api from '../api'

	export default {
	  name: 'index',
	  data () {
	    return {
            activeName: 'Signin',
            isSignin: true,
            signInClass: 'signin',
            signUpClass: 'signup',
            signInForm: [{
                	label: '用户名：',
				    key: 'username',
					value: ''
                }, {
                	label: '密码：',
				    key: 'password',
					value: ''
                }],
            signUpForm: [{
                	label: '用户名：',
				    key: 'username',
					value: ''
                }, {
                	label: '密码：',
				    key: 'password',
					value: ''
                }, {
                	label: '昵称：',
				    key: 'nickname',
					value: '匿名用户'
                }
            ],
            signInData: {
            	username: '',
            	password: ''
            },
            signUpData: {
            	username: '',
            	password: '',
            	nickname: '',
            	iChat: true
            }
	    }
	  },
	  methods: {
        tabClickHandler() {
        	this.isSignin = (this.activeName == 'Signin') ? true : false;
        },
        signInHandler() {
            const vm = this;
        	if (this.signInData['username'] == '') {
        		vm.$message({
        			showClose: true,
        			message: 'username error',
        			type: 'warning'
        		})
        	}
        	if (this.signInData['password'] == '') {
        		vm.$message({
        			showClose: true,
        			message: 'password error',
        			type: 'warning'
        		})
        	} else {
        		Api.postSignIn(this.signInData['username'], this.signInData['password'])
        		    .then(data => {
        		    	if (data) {
        		    		vm.$message({
        		    			showClose: true,
        		    			message: 'success',
        		    			type: 'success'
        		    		})
        		    	} else {
        		    		vm.$message({
        		    			showClose: true,
        		    			message: 'fail to login',
        		    			type: 'warning'
        		    		})
        		    	}
        		    }).catch(err => {
        		    	vm.$message({
        		    		showClose: true,
        		    		message: 'error,try again please',
        		    		type: 'warning'
        		    	})
        		    	console.log(err)
        		    })
        	}
        },
        signUpHandler() {
            const vm = this;
        	if (this.signUpData['username'] == '') {
        		vm.$message({
        			showClose: true,
        			message: 'username error',
        			type: 'warning'
        		})
        	}
        	if (this.signUpData['password'] == '') {
        		vm.$message({
        			showClose: true,
        			message: 'password error',
        			type: 'warning'
        		})
        	} else {
        		Api.postSignUp(this.signUpData['username'], this.signUpData['password'], this.signUpData['nickname'], this.signUpData['iChat'])
        		    .then(data => {
        		    	if (data) {
        		    		vm.$message({
        		    			showClose: true,
        		    			message: 'success',
        		    			type: 'success'
        		    		})
        		    	} else {
        		    		vm.$message({
        		    			showClose: true,
        		    			message: 'fail to login',
        		    			type: 'warning'
        		    		})
        		    	}
        		    }).catch(err => {
        		    	vm.$message({
        		    		showClose: true,
        		    		message: 'error,try again please',
        		    		type: 'warning'
        		    	})
        		    	console.log(err)
        		    })
        	}
        }
	  }
	}
</script>

<style>
	.box-card {
		width: 32%;
		height: 52%;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 55px;
	}
	.signin {
		background: url('/static/img/signinbg.jpg') no-repeat
	}
	.signup {
		background: url('/static/img/signupbg.jpg') no-repeat
	}

	.signin-form, .signup-form {
		width: 80%;
		margin: 0 14px;
	}

	.signin-form {
		margin-top: 30px;
	}

	.el-form-item {
    	margin-bottom: 14px;
	}

	.el-form-item__label {
		color: #000;
	}

	.signin-btn {
		margin-right: 30px;
		margin-top: 10px;
	}
</style>