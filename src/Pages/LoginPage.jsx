import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { loginWithEmail } from "../store/userSlice";

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginWithEmail("", ""));
  };

  return (
    <Box>
      <Input placeholder="Enter email" />
      <Input placeholder="Enter Password" />
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
}
