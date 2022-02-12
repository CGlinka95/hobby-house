import React from "react";
import { 
    Box,
    Container, 
    Flex
  } from "@chakra-ui/react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/SideBar";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <Container maxW="container.xxl" p={0}>
      <Box>
        <NavBar />
      </Box>
      <Flex gap="3.5rem">
        <Sidebar />
        <Box h="60vh" mt="2.5vh" display="flex" gap="1.5rem" flexWrap="wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </Flex>
    </Container>
  )
}