import filter from "../store/service";
import {itemFilter} from "./itemFilter";

export function changePage(page) {
    filter.setPage(page);
    itemFilter(page, filter.sort, filter.ordering);

  }