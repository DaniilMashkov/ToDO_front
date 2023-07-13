import React, {useState} from "react";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  ModalFooter,
  Button,
  Textarea, Input,
} from '@chakra-ui/react'
import {FiFolderPlus} from 'react-icons/fi'
import taskApi from "../utils/api";
import filter from "../store/service";
import {changePage} from "../utils/changePage";

const CreateTaskModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  function close() {
    onClose();
    taskApi.postItem(username, email, body)
        .then(() => changePage(filter.page))
  }

  return (<>
        <Button onClick={onOpen} leftIcon={<FiFolderPlus/>}
        >New task
        </Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Create new task</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              <FormControl p={3}>
                <Input value={username} onInput={(event) => {
                  setUser(event.target.value)
                }} placeholder='Enter username'/>
              </FormControl>
              <FormControl p={3}>
                <Input value={email} onInput={(event) => {
                  setEmail(event.target.value)
                }} placeholder='Enter email'/>
              </FormControl>
              <FormControl p={3}>
                <Textarea value={body} onInput={(event) => {
                  setBody(event.target.value)
                }} ref={initialRef} placeholder='Task`s text'/>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={close} colorScheme='blue' mr={3}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

  )

}


export default CreateTaskModal