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
	    		<el-button type="primary">确认付款</el-button>
	    	</el-row>
	    </div>
	</div>
</template>

<script>
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
	    	}
	    }
	  }
	  // props: ['order']
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