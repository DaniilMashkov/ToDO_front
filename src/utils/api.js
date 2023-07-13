import axios from "axios";

const api = axios.create()
api.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
		return config
  }, function (error) {
    return Promise.reject(error);
  });
class Items {
	url = 'http://127.0.0.1:5000/api'
 	async getItems(page, sort, ordering) {
		return api.get(`${this.url}/tasks?page=${page}&sort=${sort}&ordering=${ordering}`);
	}
	async postItem(username, email, body) {
		return api.post(`${this.url}/tasks`, {username, email, body});
	}

	async putItem(id, data) {
		return api.put(`${this.url}/tasks/${id}`, data);
	}

	async postToken(username, password) {
		return api.post(`${this.url}/token`, {username, password});
	}

	async logOut() {
		return api.post(`${this.url}/logout`);
	}
}

export default new Items()