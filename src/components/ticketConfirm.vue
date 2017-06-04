<template>
	<div class="ticket-confirm">
	    <div class="ticket-container">
	    	<el-card class="box-card">
	    	  <div slot="header">
	    	    <h4>确认订单</h4>
	    	  </div>
	    	  <div class="confirm-form">
	    	  	<el-row type="flex" justify="space-between">
	    	  		<el-col :span='12'>
	    	  			用户名：{{ order.username }}
	    	  		</el-col>
	    	  		<el-col :span='12'></el-col>
	    	  	</el-row>
	    	  	<el-row type="flex" justify="space-between">
	    	  		<el-col :span='12'>
	    	  			影院：{{ order.cinema }}
	    	  		</el-col>
	    	  		<el-col :span='12'>
	    	  			电影：{{ order.movie }}
	    	  		</el-col>
	    	  	</el-row>
	    	  	<el-row type="flex" justify="space-between">
	    	  		<el-col :span='12'>
	    	  			时间：{{ order.date }}
	    	  		</el-col>
	    	  		<el-col :span='12'>
	    	  			场次：{{ order.session }}
	    	  		</el-col>
	    	  	</el-row>
	    	  	<el-row type="flex" justify="space-between">
	    	  		<el-col :span='12'>
	    	  			单价：{{ order.perticket }}
	    	  		</el-col>
	    	  		<el-col :span='12'>
	    	  			购票数：<span>{{ order.ticketnum }}</span>
	    	  		</el-col>
	    	  	</el-row>
	    	  </div>
	    	  <el-row type="flex" justify="end" class="total-price">
	    	  	总价：<span class="total">1,000</span>
	    	  </el-row>
	    	</el-card>
	    	<el-row type="flex" justify="end" class="confirm-btn">
	    		<el-button type="primary" @click="payHandler">确认付款</el-button>
	    	</el-row>
	    </div>
	</div>
</template>

<script>
    import Api from '../api'
	export default {
	  data () {
	    return {
	    	order: {
	    		username: 'nini',
	    		cinema: 'wanda',
	    		movie: 'hehe',
	    		date: '2017.06.10',
	    		session: '07',
	    		perticket: 35,
	    		ticketnum: 3
	    	},
	    	test: {
	    		username: '123456',
	    		cinemaId: 1,
	    		movieId: 2,
	    		tnum: 3,
	    		hnum: 3,
	    		seat: '16_26_36'
	    	}
	    }
	  },
	  methods: {
	  	payHandler() {
	  		const vm = this;

	  		Api.postOrder(this.test['username'],this.test['cinemaId'], this.test['movieId'], this.test['tnum'], this.test['hnum'], this.test['seat'])
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
</script>

<style scoped>
	.box-card {
		
	}

	h4 {
		margin: 0;
	}

	.confirm-form {
		padding: 0 20px;
	}

	.el-row {
		line-height: 36px;
	}

	.total {
		font-size: 32px;
	}

	.total-price {
		margin-right: 20px;
	}

	.ticket-container {
		width: 50%;
		height: 45%;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 124px;
		text-align: left;
	}

	.confirm-btn {
		margin: 20px 0;
	}
</style>