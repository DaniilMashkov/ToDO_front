import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import filter from './store/service';
import {ChakraProvider, Box, Grid, theme, Heading, Stack,} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import LoginModal from "./components/LoginModal";
import CreateTaskModal from "./components/CreateTaskModal";
import useToken from "./components/UseToken";
import SortSelect from "./components/SortSelect";
import TaskCard from "./components/TaskCard";
import {itemFilter} from "./utils/itemFilter";
import Pagination from "./components/Pagination";
import LogOut from "./components/LogOut";


const App = observer(() => {
  const {token, removeToken, setToken} = useToken()

  itemFilter(filter.page, filter.sort, filter.ordering)

  useEffect(() => {
    itemFilter(filter.page, filter.sort, filter.ordering)
  }, [])
  console.log('render main')
  return (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Box textAlign="center" fontSize="medium">
            <Grid p={3}>
              <Stack direction={"row"} justifySelf={"flex-end"}>
                <ColorModeSwitcher/>
                <CreateTaskModal/>

                {!token && token !== "" && token !== undefined ?
                    <LoginModal setToken={setToken}/>
                    : ( <LogOut token={removeToken}/>
                    )
                }
              </Stack>
              <Heading gap='80px' p={5} textShadow='0 0 20px teal' size='lg' justifySelf={"center"}>
                ToDo list
              </Heading>
              <SortSelect/>
              <TaskCard token={token} setToken={setToken}/>
              <Pagination/>
            </Grid>
          </Box>
        </ChakraProvider>
      </BrowserRouter>

  );
})

export default App;
