import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import EditTaskModal from "./EditTaskModal";
import { FiCheck, FiLock, FiEdit } from "react-icons/fi";
import React, { useEffect } from "react";
import { changeStatus } from "../utils/changeStatus";

import filter from '../store/service';
import { observer } from "mobx-react-lite";
import auth from "../store/auth";

const TaskCard = observer((props) => {

  useEffect(() => filter.getFilterItems(), [])

  return (
    <SimpleGrid columns={[1, null, 3]} spacing={2}>
      {filter.items.map((el) => (
        <Card key={el.id_task}>
          <CardHeader>
            <Heading size='md'>User: {el.username} <br /> Email: {el.email}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{el.body}</Text>
          </CardBody>
          {auth.token ?
            <CardFooter>
              <SimpleGrid columns={[2, null, 3]} spacing={'8px'}>
                <EditTaskModal props={props} item={el} />
                <Button
                  size={'xs'} onClick={() => changeStatus(el)} rightIcon={el.is_active ? <FiCheck /> : <FiLock />}
                  colorScheme={el.is_active ? 'teal' : 'red'} variant='outline'>{el.is_active? 'Work' : 'Done'}
                </Button>
                {el.admin_mark ?
                  <Button isDisabled={true} size={'xs'} rightIcon={<FiEdit />}>Edited</Button> : <></>}
              </SimpleGrid>
            </CardFooter>
            : (
              <CardFooter>
                <SimpleGrid columns={[2, null, 3]} spacing={'8px'}>
                  <Button
                    size={'xs'} isDisabled={true} rightIcon={el.is_active ? <FiCheck /> : <FiLock />}
                    colorScheme={el.is_active ? 'teal' : 'red'} variant='outline'>{el.is_active? 'Work' : 'Done'}
                  </Button>
                  {el.admin_mark ?
                    <Button isDisabled={true} size={'xs'} rightIcon={<FiEdit />}>Edited</Button> : <></>}
                </SimpleGrid>
              </CardFooter>
            )

          }
        </Card>))}
    </SimpleGrid>
  )
}
)
export default TaskCard