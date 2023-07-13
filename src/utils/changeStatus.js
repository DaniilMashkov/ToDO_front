import taskApi from "./api";
import filter from "../store/service";
import {itemFilter} from "./itemFilter";

export function changeStatus(el, props) {
    taskApi.putItem(el.id_task, {is_active: !el.is_active}, props.token)
        .then((response) => {props.setToken(response.data.access_token)})
    filter.setPage(filter.page)
    itemFilter(filter.page, filter.sort, filter.ordering)
  }