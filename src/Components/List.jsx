import {
  Box,
  Button,
  Text,
  Heading,
  HStack,
  Input,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectListById } from "../store/listSlice";
import { addTask } from "../store/taskSlice";
import DisplayTask from "./DisplayTask";
import { MdDelete } from "react-icons/md";

const List = ({ id }) => {
  const list = useSelector((state) => selectListById(state, id));
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (task.length < 3) {
      setError("Task should have at least 2 characters");
      return;
    }
    dispatch(addTask(task, id));
    setTask("");
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }, [error]);
  return (
    <>
      <Box
        // border="1px"
        bg="gray.100"
        // borderColor="gray.500"
        pb="2rem"
        maxW="sm"
        rounded={"md"}
      >
        <Flex bg="teal.200" p="2">
          <Heading p="2" as="h2" size="lg" bg="" color="white">
            {list.name}
          </Heading>
          <MdDelete style={{ color: "red", fontSize: "24px" }} />
        </Flex>
        <VStack align="flex-start" ml="4" mr="4">
          <Box mt="4" w="full">
            {list.taskIds.length === 0
              ? "No tasks found"
              : list.taskIds.map((id) => <DisplayTask id={id} />)}
          </Box>

          <form onSubmit={onSubmit}>
            <HStack>
              <Input
                w="50%"
                bg="white"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button bg="cyan.700" color="white" type="submit">
                Add Task
              </Button>
            </HStack>
            <chakra.p my="2" color={"red.500"}>
              {error && error}
            </chakra.p>
          </form>
        </VStack>
      </Box>
    </>
  );
};

export default List;
