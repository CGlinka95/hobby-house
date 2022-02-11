import React from "react";
import { 
    Box,
    Container, 
  } from "@chakra-ui/react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/SideBar"

export default function Home() {
  return (
    <Container maxW="container.xxl" p={0}>
      <Box>
        <NavBar />
      </Box>
      <Sidebar />
    </Container>
  )
}