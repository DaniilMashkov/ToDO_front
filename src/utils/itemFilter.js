import taskApi from "./api";
import filter from "../store/service";

export function itemFilter() {
  console.log(filter.items)
    taskApi.getItems(filter.page, filter.sort, filter.ordering)
        .then(response => {
          filter.setItems(response.data.items)
          filter.setTotalPages(response.data.meta.total_pages)
          console.log(filter.items)
        } )
        .catch(err => console.log(err))

  }

