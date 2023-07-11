export function itemFilter(taskApi, setItem, setTotalPages, showToast, page, column, sort, query) {
    taskApi.getItems(page, column, sort, query)
        .then(response => setItem(response.data.results) || setTotalPages(Math.ceil(response.data.count) / 10))
        .catch(err => showToast(err.response.data.err))
  }