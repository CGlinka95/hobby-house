import React from "react";
import { 
    Box,
    Container, 
    Flex
  } from "@chakra-ui/react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/SideBar";
import Edit from "../components/edit/Edit";
import Add from "../components/add/Add";

export default function Product() {
  return (
    <Container maxW="container.xxl" p="1rem">
      <Box>
        <NavBar />
      </Box>
      <Flex gap="2rem">
        <Sidebar />
        <Flex>
          <Add />
          <Edit />
        </Flex>
      </Flex>
    </Container>
  )
}