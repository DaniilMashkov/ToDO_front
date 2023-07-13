import taskApi from "./api";
import filter from "../store/service";

export function changeStatus(el) {
    taskApi.putItem(el.id_task, {is_active: !el.is_active})
    filter.setPage()
    filter.getFilterItems()
  }