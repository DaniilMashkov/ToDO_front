import {makeAutoObservable} from "mobx";

class Auth {

  token = ''
  constructor() {
    makeAutoObservable(this)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(userToken) {
    localStorage.setItem('token', userToken);
    this.token = userToken;
  }

  removeToken() {
    localStorage.removeItem("token");
    this.token = false
  }
}


export default new Auth()