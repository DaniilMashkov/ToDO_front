import {FiLogOut} from 'react-icons/fi'
import api from "../utils/api";
import {Button} from "@chakra-ui/react";
import React from "react";

function LogOut(props) {

  function logMeOut() {
    api.logOut()
        .then(() => {
          props.token()
        }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  }

  return (
      <Button leftIcon={<FiLogOut/>} onClick={logMeOut}>Logout</Button>
  )
}

export default LogOut;