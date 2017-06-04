import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let vm = new Vue()

let ApiUrl = 'http://118.89.59.220:8080'

let Api = {
	postSignIn(username, password) {
		return new Promise((resolve, reject) => {
			vm.$http.post(ApiUrl + '/toLogin', {
				params: {
					username: username,
					password: password
				}
			}).then(response => {
                let data = response.body
                resolve(data)
			}, response=> {
				reject(response)
				console.log('error:', response)
			})
		})
	},
	postSignUp(username, password, nickname, iChat) {
		return new Promise((resolve, reject) => {
			vm.$http.post(ApiUrl + '/register', {
				params: {
					username: username,
					password: password,
					nickname: nickname,
					iChat: iChat
				}
			}).then(response => {
				let data = response.body
				resolve(data)
			}, response => {
				reject(response)
				console.log('error:', response)
			})
		})
	},
	// this.test['username'],this.test['cinemaId'], this.test['movieId'], this.test['tnum'], this.test['hnum'], this.test['seat']
	postOrder(username, cinemaId, movieId, tnum, hnum,seat) {
		return new Promise((resolve, reject) => {
			vm.$http.post(ApiUrl + '/book/confirm', {
				params: {
					username: username,
					cinemaId: cinemaId,
					movieId: movieId,
					tnum: tnum,
					hnum: hnum,
					seat: seat
				}
			}).then(response => {
				let data = response.body
				resolve(data)
			}, response => {
				reject(response)
				console.log('error:', response)
			})
		})
	}
}

export default Api