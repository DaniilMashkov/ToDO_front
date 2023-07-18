import {FiLogOut} from 'react-icons/fi'
import api from "../utils/api";
import {Button} from "@chakra-ui/react";
import React from "react";
import auth from "../store/auth";

function LogOut() {

  function logMeOut() {

    api.logOut()
        .then(() => {auth.removeToken()})
        .catch((error) => null )
  }

  return (
      <Button leftIcon={<FiLogOut/>} onClick={logMeOut}>Logout</Button>
  )
}

export default LogOut;