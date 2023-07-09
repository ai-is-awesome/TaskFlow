import { Box, Heading } from "@chakra-ui/react";
import { GrInbox } from "react-icons/gr";
import { useQuery, gql } from "@apollo/client";

export default function SideBar(props) {
  console.log("Props: ", props);
  const query = gql`
    query getBoards {
      boards {
        _id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(query);

  return (
    <>
      <Box
        as="aside"
        {...props}
        bg={"teal.200"}
        minH={"90vh"}
        // px={"2rem"}
        // py="2rem"
      >
        <Heading
          fontSize={"1.5rem"}
          color={"white"}
          pt={"2rem"}
          pl=".5rem"
          pr=".5rem"
        >
          TASKFLOOOW
        </Heading>

        <Box color={"white"} px="1rem" py="2rem" color="black">
          <Box my="1rem" display={"flex"} alignItems={"center"} gap="2">
            <GrInbox backgroundColor="white" color="white" /> Boards
          </Box>

          {data &&
            data.boards.map((board) => <p key={board._id}>{board.name}</p>)}
          <Box>Members</Box>
        </Box>
      </Box>
    </>
  );
}
