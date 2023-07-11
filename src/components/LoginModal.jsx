import React from "react";
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
  Input, Textarea,
} from '@chakra-ui/react'
import {FiLogIn, FiLogOut} from 'react-icons/fi'
import PasswordInput from "./PasswordInput";

const LoginModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
      <>
        <Button leftIcon={<FiLogIn/>} onClick={onOpen}>Login</Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              <FormControl>
                <Textarea ref={initialRef} placeholder='Enter Username'/>
              </FormControl>

              <FormControl mt={4}>
                <PasswordInput/>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

  )

}


export default LoginModal
