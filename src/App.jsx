import { Box } from "@chakra-ui/react";

import { Heading } from "@chakra-ui/react";
// import GroupList from "./Components/GroupList";
import CreateList from "./Components/CreateList";

export default function App() {
  return (
    <div>
      <Heading px={"1rem"} as="h1" size="xl" color="white" bg="teal.700">
        Todo Boards
      </Heading>
      <Box px={"1rem"} py=".5rem">
        <CreateList />
      </Box>
    </div>
  );
}
