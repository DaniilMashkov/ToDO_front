import React from 'react';
import {observer} from "mobx-react-lite";
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider, Box, Grid, theme, Heading, Stack,} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import LoginModal from "./components/LoginModal";
import CreateTaskModal from "./components/CreateTaskModal";
import SortSelect from "./components/SortSelect";
import TaskCard from "./components/TaskCard";
import Pagination from "./components/Pagination";
import LogOut from "./components/LogOut";
import auth from './store/auth'


const App = observer(() => {

  return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="medium">
          <Grid p={3}>
            <Stack direction={"row"} justifySelf={"flex-end"}>
              <ColorModeSwitcher/>
              <CreateTaskModal/>
              {auth.token ? <LogOut/> : <LoginModal/>}
            </Stack>
            <Heading gap='80px' p={5} textShadow='0 0 20px teal' size='lg' justifySelf={"center"}>
              ToDo list
            </Heading>
            <SortSelect/>
            <TaskCard/>
            <Pagination/>
          </Grid>
        </Box>
      </ChakraProvider>

  );
})

export default App;
