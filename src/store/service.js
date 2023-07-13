import {makeAutoObservable} from "mobx"


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


}


export default new Filter()