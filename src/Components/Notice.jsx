import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Notice({ children }) {
  const [show, setShow] = useState(true);
  console.log("SHOW IS : ", show);

  return (
    show && (
      <>
        <Box
          bg="red.100"
          p="1rem"
          rounded="md"
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb="2rem"
          fontWeight={"bold"}
          color={"gray.700"}
        >
          {children}
          <Box>
            <Button onClick={() => setShow((s) => !s)}>X</Button>
          </Box>
        </Box>
      </>
    )
  );
}
