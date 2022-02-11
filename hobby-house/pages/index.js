import React from "react";
import { 
    Container, 
    Flex, 
    Heading 
  } from "@chakra-ui/react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/SideBar"

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex py={7}>
        <Sidebar />
        <Heading px="2rem">Hobby House</Heading>
        <NavBar />
      </Flex>
      <Flex h="100vh" py={15}>

      </Flex>
    </Container>
  )
}