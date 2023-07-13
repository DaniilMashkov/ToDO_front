import {makeAutoObservable} from "mobx"
import taskApi from "../utils/api";

class Filter {
  page = 1
  totalPages = 1
  sort = ''
  ordering = ''
  items = []

  constructor() {
    makeAutoObservable(this)
  }

  setPage(number) {
    this.page = number
  }

  setSort(value) {
    this.sort = value
  }

  setOrdering(value) {
    this.ordering = value
  }

  setItems(values) {
    this.items = values
  }

  setTotalPages(count) {
    this.totalPages = count
  }

  getFilterItems() {
    taskApi.getItems(this.page, this.sort, this.ordering)
        .then(res => {
          this.setItems(res.data.items)
          this.setTotalPages(res.data.meta.total_pages)
        })
        .catch(err => console.log(err))
  }

  getPage(page) {
    this.setPage(page);
    this.getFilterItems();
  }

}


export default new Filter()