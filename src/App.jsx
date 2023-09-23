import { Box, Button, Flex } from "@chakra-ui/react";

import { Heading } from "@chakra-ui/react";
import { AiFillWarning } from "react-icons/ai";

// import GroupList from "./Components/GroupList";
import CreateList from "./Components/CreateList";
import GroupList from "./Components/GroupList";
import SideBar from "./Components/SideBar";
import Notice from "./Components/Notice";
import { useDispatch, useSelector } from "react-redux";
import { listenToAuthState, selectFirebaseData } from "./store/userSlice";
import { useEffect } from "react";

export default function App() {
  const firebaseData = useSelector(selectFirebaseData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listenToAuthState());
  }, [dispatch]);

  return (
    <>
      <Box display={"flex"}>
        <SideBar flex="1" />
        <Box px={"rem"} py="rem" ml="" bg="gray.200" flex="10" mt="rem">
          <Box
            px={"1rem"}
            as="h1"
            size="xl"
            color="white"
            bg="teal.200"
            py="1.5rem"
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Button as={"a"} href="/login" bg={"cyan.700"}>
              Login
            </Button>
          </Box>
          {/* <Box px={"1rem"} py="2rem" ml="" bg="gray.100" flex="10" mt="rem"></Box> */}
          {/* Main Center box */}
          <Box px={"1rem"} py="2rem" ml="" bg="gray.200" flex="10" mt="rem">
            <Notice>
              <Flex alignItems={"center"}>
                <span>
                  <AiFillWarning />
                </span>
                This app is under heavy development, it maybe unstable to use.
                I've deployed it just to give a basic idea about what the
                application is about
              </Flex>
            </Notice>
            <CreateList />
            <GroupList />
          </Box>
        </Box>
      </Box>
    </>
  );
}
