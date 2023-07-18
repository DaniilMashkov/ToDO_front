import axios from "axios";
import auth from '../store/auth'

const api = axios.create()
api.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
		return config
  }, function (error) {
    return Promise.reject(error);
  });
class Items {
	url = 'http://5.63.159.85:5000/api'
 	async getItems(page, sort, ordering) {
		return api.get(`${this.url}/tasks?page=${page}&sort=${sort}&ordering=${ordering}`);
	}
	async postItem(username, email, body) {
		return api.post(`${this.url}/tasks`, {username, email, body});
	}

	async putItem(id, data) {
		return api.put(`${this.url}/tasks/${id}`, data);
	}

	async logIn(username, password) {
		return api.post(`${this.url}/login`, {username, password});
	}

	async verifyToken() {
		return api.get(`${this.url}/verifytoken`)
		.then( () => {auth.setToken(auth.getToken())})
		.catch((err) => null)
	}

	async logOut() {
		return api.post(`${this.url}/logout`);
	}
}

export default new Items()