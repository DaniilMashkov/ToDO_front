import {Button, SimpleGrid } from "@chakra-ui/react";
import filter from "../store/service";
import React from "react";
import {range} from "../utils/range";
import {observer} from "mobx-react-lite";

const Pagination = observer( () => {

  return (
      <SimpleGrid minChildWidth='5' spacing='20px' p={8}>

          {[...range(1, filter.totalPages)]
              .map((el, index) =>
                  <Button isActive={filter.page === el}
                          key={index}
                          onClick={() => filter.getPage(el)}>{el}
                  </Button>)}
        
      </SimpleGrid>
  )
})

export default Pagination