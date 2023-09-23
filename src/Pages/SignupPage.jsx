import { Box, Button, Input } from "@chakra-ui/react";

export default function SignupPage() {
  return (
    <Box>
      <Input placeholder="Enter email" />
      <Input placeholder="Enter Password" />
      <Button>Signup</Button>
    </Box>
  );
}
