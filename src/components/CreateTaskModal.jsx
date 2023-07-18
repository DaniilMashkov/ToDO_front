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
  useToast 
} from '@chakra-ui/react'
import { FiFolderPlus } from 'react-icons/fi'
import taskApi from "../utils/api";
import filter from "../store/service";


const CreateTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [taskForm, setTaskForm] = useState({ username: "", email: "", body: "" })
  const toast = useToast()

  function handleChange(event) {
    const { value, name } = event.target
    setTaskForm(prevNote => ({
      ...prevNote, [name]: value
    })
    )
  }

  return (<>
    <Button onClick={onOpen} leftIcon={<FiFolderPlus />}
    >New task
    </Button>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new task</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl p={3}>
            <Input onChange={handleChange}
              type="username"
              name="username"
              text={taskForm.username}
              placeholder='Enter username'
              value={taskForm.username}
              ref={initialRef} />
          </FormControl>
          <FormControl p={3}>
            <Input onChange={handleChange}
              type="email"
              name="email"
              text={taskForm.email}
              value={taskForm.email}
              ref={initialRef}
              placeholder='Enter email' />
          </FormControl>
          <FormControl p={3}>
            <Textarea onChange={handleChange}
              ref={initialRef}
              text={taskForm.body}
              name="body"
              type="body"
              value={taskForm.body}
              placeholder='Task`s text' />
          </FormControl>
        </ModalBody>
        <ModalFooter>
        <Button colorScheme='blue' mr={3}
            onClick={() =>
                taskApi.postItem(taskForm.username, taskForm.email, taskForm.body)
                    .then((response) => {
                        filter.getPage(filter.page)
                        toast({
                            title: response.statusText,
                            status: 'info',
                            duration: 3000,
                            isClosable: true,
                            position: 'bottom-right'
                        })
                        setTaskForm(({ username: '', email: '', body: '' }))
                        onClose()
                    })
                    .catch((error) => {
                        toast({
                            title: error.response.data.msg,
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                            position: 'bottom-right'
                        })
                    })
            }   
        >
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