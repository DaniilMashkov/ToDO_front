import React, {useEffect, useState} from 'react';
import taskApi from "./utils/api";
import {observer} from "mobx-react-lite";
import filter from './store/service';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  Heading,
  Button,
  Stack,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,


} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import {FiEdit3, FiCheck, FiFolderPlus} from 'react-icons/fi'
import LoginModal from "./components/LoginModal";
import {range} from "./utils/range";
import CreateTaskModal from "./components/CreateTaskModal";
import EditTaskModal from "./components/EditTaskModal";


const App = observer(() => {
  const [item, setItem] = useState([])
  const [column, setColumn] = useState('')
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  function itemFilter(page, column, sort, query) {
    console.log(item)
    taskApi.getItems(page, column, sort, query)
        .then(response => setItem(response.data.items) || setTotalPages(response.data.meta.total_pages))
        .catch(err => console.log(err))
  }

  function changePage(el) {
    filter.setPage(el);
    itemFilter(el, column, sort, query);

  }

  useEffect(() => {
    itemFilter(filter.page, column, sort, query)
  }, [])

  return (<ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="medium">
      <Grid p={3}>
        <Stack direction={"row"} justifySelf={"flex-end"}>
          <ColorModeSwitcher/>
          <CreateTaskModal/>
          <LoginModal/>
        </Stack>

        <Heading gap='80px' p={5} textShadow='0 0 20px teal' size='lg' justifySelf={"center"}>
          ToDo list
        </Heading>
        <SimpleGrid p={3}>
          <Stack direction='row' spacing={5}>*/}>
            <Input
            ></Input>
            <Input
            ></Input>
            <Input
            ></Input>
          </Stack>
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2}>
          {item.map((el) => (<Card key={el.id_task}>
                <CardHeader>
                  <Heading size='md'></Heading>
                </CardHeader>
                <CardBody>
                  <Text>{el.body}</Text>
                </CardBody>
                <CardFooter>
                  <Stack direction='row' spacing={2}>*/
                    <EditTaskModal id={el.id_task} fetchItem={changePage}/>
                    <Button
                        rightIcon={<FiCheck/>} colorScheme='teal' variant='outline'>Mark as done
                    </Button>
                  </Stack>
                </CardFooter>
              </Card>))}

        </SimpleGrid>
        <SimpleGrid p={8}>
          <Stack direction={"row"} justifySelf={"center"}>
            {[...range(1, totalPages)].map((el, index) => <Button isActive={filter.page === el} key={index}
                                                                  onClick={() => changePage(el)}>{el}</Button>)}
          </Stack>

        </SimpleGrid>
      </Grid>
    </Box>
  </ChakraProvider>);
})

export default App;
