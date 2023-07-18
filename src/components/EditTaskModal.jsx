import React, {useState} from "react";
import {Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  ModalFooter,
  Button,
  Textarea,
} from '@chakra-ui/react'
import {FiEdit3} from 'react-icons/fi'
import taskApi from "../utils/api";
import filter from '../store/service';

const EditTaskModal = (props) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [text, setText] = useState(props.item.body)

  function close(){
    onClose();
    taskApi.putItem(props.item.id_task, {body:text})
      .then(() => filter.getPage(filter.page))
      .catch(() => window.location.reload(false))
  };

  return (
      <>
        <Button size={'xs'} leftIcon={<FiEdit3/>} colorScheme='teal' variant='solid' onClick={onOpen}>Edit
        </Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Edit task</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              <FormControl p={3}>
                <Textarea value={text} onChange={(event) => {setText(event.target.value)}} placeholder='Enter task text'/>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={close}  colorScheme='blue' mr={3}>
                Confirm
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

  )

}


export default EditTaskModal