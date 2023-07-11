import React, {useEffect, useState} from "react";
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
import {FiEdit3, FiFolderPlus, FiLogIn, FiLogOut} from 'react-icons/fi'
import taskApi from "../utils/api";
import filter from '../store/service';

const EditTaskModal = ({id, fetchItem}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [item, setItem] = useState('')

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  function close(){
    onClose();
    taskApi.putItem(id, item);
    fetchItem(filter.page)
  }
  useEffect(() => {
    taskApi.getItem(id).then(response => setItem(response.data.body))
  }, [])
  return (
      <>
        <Button leftIcon={<FiEdit3/>} colorScheme='teal' variant='solid' onClick={onOpen}>Edit
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
                <Textarea value={item} onChange={(event) => {setItem(event.target.value)}} placeholder='Enter task text'/>
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