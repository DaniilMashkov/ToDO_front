import axios from "axios";

class Items {
	constructor() {
	}
	url = 'http://127.0.0.1:5000/api'
 	async getItems(page, sort, ordering) {
		return axios.get(`${this.url}/tasks?page=${page}&sort=${sort}&ordering=${ordering}`);
	}
	async postItem(username, email, body) {
		return axios.post(`${this.url}/tasks`, {username, email, body});
	}

	async putItem(id, data, token) {
		return axios.put(`${this.url}/tasks/${id}`, data, {headers:{'Authorization':'Bearer ' + token}});
	}

	async postToken(username, password) {
		console.log(username, password)
		return axios.post(`${this.url}/token`, {username, password});
	}

	async logOut() {
		return axios.post(`${this.url}/logout`);
	}
}

export default new Items()