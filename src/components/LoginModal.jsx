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
  Input,
} from '@chakra-ui/react'
import {FiLogIn} from 'react-icons/fi'
import api from "../utils/api";
import auth from "../store/auth";

const LoginModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [loginForm, setLoginForm] = useState({username: "", password: ""})

  function logMeIn(event) {
    api.postToken(loginForm.username, loginForm.password)
        .then((response) => {
          auth.setToken(response.data.access_token) && onClose()
        }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })

    setLoginForm(({username: "", password: ""}))
    event.preventDefault()
  }

  function handleChange(event) {
    const {value, name} = event.target
    setLoginForm(prevNote => ({
          ...prevNote, [name]: value
        })
    )
  }

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
                <Input onChange={handleChange}
                       type="username"
                       text={loginForm.username}
                       name="username"
                       value={loginForm.username}
                       ref={initialRef}
                       placeholder='Enter Username'/>
              </FormControl>
              <FormControl mt={4}>
                <Input onChange={handleChange}
                               type="password"
                               text={loginForm.password}
                               name="password"
                               placeholder="Password"
                               value={loginForm.password}/>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={logMeIn} colorScheme='blue' mr={3}>
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
