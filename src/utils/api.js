import axios from "axios";

class Items {
	constructor() {
	}
	url = 'http://127.0.0.1:5000/api/tasks'
 	async getItems(page, column, sort, query) {
		return axios.get(`${this.url}?page=${page}`);
	}
	async postItem(username, email, body) {
		return axios.post(`${this.url}`, {username, email, body});
	}

	async getItem(id) {
		return axios.get(`${this.url}/${id}`);
	}

	async putItem(id, body) {
		return axios.put(`${this.url}/${id}`, {body});
	}
}

export default new Items()