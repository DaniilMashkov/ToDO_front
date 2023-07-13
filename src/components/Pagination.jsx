import {Button, SimpleGrid, Stack} from "@chakra-ui/react";
import {range} from "../utils/range";
import filter from "../store/service";
import {changePage} from "../utils/changePage";
import React from "react";

const Pagination = () => {
  return (
      <SimpleGrid p={8}>
        <Stack direction={"row"} justifySelf={"center"}>
          {[...range(1, filter.totalPages)]
              .map((el, index) =>
                  <Button isActive={filter.page === el}
                          key={index}
                          onClick={() => changePage(el)}>{el}
                  </Button>)}
        </Stack>

      </SimpleGrid>
  )
}

export default Pagination