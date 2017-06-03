import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let vm = new Vue()

let ApiUrl = 'http://172.19.51.223:8080'

let Api = {
	postSignIn(username, password) {
		return new Promise((resolve, reject) => {
			vm.$http.post(ApiUrl + '/login', {
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
	}
}

export default Api