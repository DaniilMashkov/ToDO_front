import {Button, SimpleGrid, Stack} from "@chakra-ui/react";
import filter from "../store/service";
import React from "react";
import {range} from "../utils/range";
import {observer} from "mobx-react-lite";

const Pagination = observer( () => {

  return (
      <SimpleGrid p={8}>
        <Stack direction={"row"} justifySelf={"center"}>

          {[...range(1, filter.totalPages)]
              .map((el, index) =>
                  <Button isActive={filter.page === el}
                          key={index}
                          onClick={() => filter.getPage(el)}>{el}
                  </Button>)}
        </Stack>

      </SimpleGrid>
  )
})

export default Pagination