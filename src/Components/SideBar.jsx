import { Box, Heading } from "@chakra-ui/react";
import { GrInbox } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { useQuery, gql } from "@apollo/client";
import { customTheme } from "../theme";

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
        bg={customTheme.pimaryColor}
        minH={"90vh"}
        // px={"2rem"}
        // py="2rem"
      >
        <Heading
          fontSize={"1.8rem"}
          color={"white"}
          pt={"2rem"}
          pl=".5rem"
          pr=".5rem"
          fontWeight={"black"}
        >
          TASKFLOOOW
        </Heading>
        <Box color={"white"} px="1rem" py="2rem">
          <Box
            my="1rem"
            display={"flex"}
            alignItems={"center"}
            gap="2"
            fontSize={"1.2rem"}
            fontWeight={"bold"}
          >
            <GrInbox backgroundColor="white" color="white" /> Boards
          </Box>

          {data &&
            data.boards.map((board) => (
              <Box
                bg={"white"}
                mb="1rem"
                rounded={"md"}
                p=".5rem"
                key={board._id}
                color={"black"}
              >
                {board.name}
              </Box>
            ))}
          <Box
            my="1rem"
            display={"flex"}
            alignItems={"center"}
            gap="2"
            fontSize={"1.2rem"}
            fontWeight={"bold"}
          >
            <IoIosPeople /> Members
          </Box>
        </Box>
      </Box>
    </>
  );
}
