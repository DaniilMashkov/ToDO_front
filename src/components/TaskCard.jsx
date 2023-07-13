import {Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import EditTaskModal from "./EditTaskModal";
import {FiCheck, FiLock, FiEdit} from "react-icons/fi";
import React, {useEffect} from "react";
import {changeStatus} from "../utils/changeStatus";

import filter from '../store/service';
import {observer} from "mobx-react-lite";
import auth from "../store/auth";

const TaskCard = observer((props) => {

      useEffect(() => filter.getFilterItems(), [])

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
                  {auth.token ?
                      <CardFooter>
                        <Stack direction='row' spacing={2}>*/
                          <EditTaskModal props={props} item={el}/>
                          <Button
                              onClick={() => changeStatus(el)} rightIcon={el.is_active ? <FiCheck/> : <FiLock/>}
                              colorScheme={el.is_active ? 'teal' : 'red'} variant='outline'>Status
                          </Button>
                          {el.admin_mark ?
                              <Button isDisabled={true} rightIcon={<FiEdit/>}>Edited by admin</Button> : <></>}
                        </Stack>
                      </CardFooter>
                      : (
                          <CardFooter>
                            <Stack direction='row' spacing={2}>*/
                              {el.admin_mark ?
                                  <Button isDisabled={true} rightIcon={<FiEdit/>}>Edited by admin</Button> : <></>}
                            </Stack>
                          </CardFooter>
                      )

                  }
                </Card>))}
          </SimpleGrid>
      )
    }
)
export default TaskCard