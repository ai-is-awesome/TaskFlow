import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectTaskById } from "../store/taskSlice";

const DisplayTask = ({ id }) => {
  console.log("ID disply task : ", id);
  const task = useSelector((state) => selectTaskById(state, id));

  return (
    <Box w="100%" bg="white" mb="2" p="2" px="4" rounded="lg">
      {task.title}
    </Box>
  );
};

export default DisplayTask;
