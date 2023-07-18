import {Select, SimpleGrid, Stack} from "@chakra-ui/react";
import filter from "../store/service";
import React from "react";

const sortSelect = () => {
  return(
    <SimpleGrid p={5}>
          <Stack direction='row' spacing={5}>
            <Select placeholder='Sort by...' onChange={(event) => {
              filter.setSort(event.target.value);
              filter.setPage(1)
              filter.getFilterItems()
            }
            }>
              <option value='"user".username'>Username</option>
              <option value='"user".email'>Email</option>
              <option value='"task".is_active'>Status</option>
            </Select>
            <Select placeholder='Order by...' onChange={(event) => {
              filter.setOrdering(event.target.value);
              filter.setPage(1);
              filter.getFilterItems()
            }
            }>
              <option value=' DESC'>Descending</option>
              <option value=' ASC'>Ascending</option>
            </Select>
          </Stack>
        </SimpleGrid>
  )
}

export default sortSelect