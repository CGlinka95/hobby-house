import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import NavBar from "../components/navbar/navbar";

const Home = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex w="100vw" py={7}>
        <Heading px="2rem">Hobby House</Heading>
        <NavBar />
      </Flex>
      <Flex h="100vh" py={15}>

      </Flex>
    </Container>
  )
}

export default Home;
