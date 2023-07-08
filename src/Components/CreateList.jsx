import { Button, VStack, Text, Center } from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../store/listSlice";

const CreateList = () => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState("");
  const [error, setError] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (listName === "") {
      setError("List Name cannot be empty");
    } else {
      setListName("");
      dispatch(createList({ listName: listName }));
      setError("");
    }
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <VStack align="center" mb="8">
          <Input
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Create a new List"
            bg="white"
            w="50%"
          />
          <Button type="submit" bg="cyan.700" color="white">
            Add List
          </Button>
          {error && <Text color="red.500">{error}</Text>}
        </VStack>
      </form>
    </>
  );
};

export default CreateList;
