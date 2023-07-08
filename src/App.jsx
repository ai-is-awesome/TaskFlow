import { Box } from "@chakra-ui/react";

import { Heading } from "@chakra-ui/react";

// import GroupList from "./Components/GroupList";
import CreateList from "./Components/CreateList";
import GroupList from "./Components/GroupList";
import SideBar from "./Components/SideBar";

export default function App() {
  return (
    <>
      <Box display={"flex"}>
        <SideBar flex="1" />
        <Box px={"rem"} py="rem" ml="" bg="gray.100" flex="10" mt="rem">
          <Heading
            px={"1rem"}
            as="h1"
            size="xl"
            color="white"
            bg="teal.200"
            py="1rem"
          />
          {/* <Box px={"1rem"} py="2rem" ml="" bg="gray.100" flex="10" mt="rem"></Box> */}
          {/* Todo Boards */}
          <Box px={"1rem"} py="2rem" ml="" bg="gray.100" flex="10" mt="rem">
            <CreateList />
            <GroupList />
          </Box>
        </Box>
      </Box>
    </>
  );
}
