import React from "react";
import { 
    Box,
    Container, 
    Flex,
  } from "@chakra-ui/react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/SideBar";
import Edit from "../components/edit/Edit"

export default function EditProduct() {
  return (
    <Container maxW="container.xxl" p={0}>
      <Box>
        <NavBar />
      </Box>
      <Flex gap="3.5rem">
        <Sidebar />
        <Box>
          <Edit />
        </Box>
      </Flex>
    </Container>
  )
}