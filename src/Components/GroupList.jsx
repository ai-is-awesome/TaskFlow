import { Box, Grid, GridItem } from "@chakra-ui/react";
import List from "./List";
import { useSelector } from "react-redux";
import { selectLists, selectListsIds } from "../store/listSlice";

const GroupList = ({ listId }) => {
  const lists = useSelector(selectListsIds);

  console.log("LISTS : ", lists);
  return (
    <>
      <Box>{lists.length}</Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {lists.map((id) => (
          <GridItem key={id}>
            <List id={id} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GroupList;
