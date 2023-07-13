import {Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import EditTaskModal from "./EditTaskModal";
import {FiCheck, FiLock} from "react-icons/fi";
import React from "react";
import {changeStatus} from "../utils/changeStatus";

import filter from '../store/service';

const TaskCard = (props) => {
  console.log('render cards')
  return (
      <SimpleGrid columns={3} spacing={2}>
        {filter.items.map((el) => (
            <Card key={el.id_task}>
              <CardHeader>
                <Heading size='md'>User: {el.username} <br/> Email: {el.email}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{el.body}</Text>
              </CardBody>
              {!props.token && props.token !== "" && props.token !== undefined ?
                  <></>
                  : (<CardFooter>
                        <Stack direction='row' spacing={2}>*/
                          <EditTaskModal props={props} item={el}/>
                          <Button
                              onClick={() => changeStatus(el)} rightIcon={el.is_active ? <FiCheck/> : <FiLock/>}
                              colorScheme={el.is_active ? 'teal' : 'red'} variant='outline'>Status
                          </Button>
                        </Stack>
                      </CardFooter>)
              }
            </Card>))}
      </SimpleGrid>
  )
}

export default TaskCard