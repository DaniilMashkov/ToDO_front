import {makeAutoObservable} from "mobx"
import taskApi from "../utils/api";


class Filter {
  page = 1
  column = ''
  sort = ''
  query = ''

  constructor() {
    makeAutoObservable(this)
  }

  setPage(number) {
    this.page = number
  }

}


export default new Filter()