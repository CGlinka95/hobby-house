import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Cart  from '../components/cart';
import Details from '../components/details';
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default Home;
