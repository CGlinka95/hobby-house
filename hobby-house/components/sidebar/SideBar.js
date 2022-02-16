import { 
    Avatar, 
    Divider, 
    Flex, 
    Heading, 
    IconButton, 
    Text 
  } from "@chakra-ui/react"
import React, { useState } from "react"
import { 
    FiMenu, 
    FiHome 
  } from "react-icons/fi"
import { 
    IoSearch, 
    IoOptionsOutline, 
    IoCartOutline, 
    IoAlbumsOutline, 
    IoHandLeftOutline 
  } from "react-icons/io5"
import NavItem from "./NavItem";

export default function SideBar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
          pos="sticky"
          left="5"
          h="100vh"
          mt="2.5vh"
          boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
          borderRadius={navSize == "small" ? "15px" : "30px"}
          w={navSize == "small" ? "75px" : "200px"}
          flexDir="column"
          justifyContent="space-between"
        >
            <Flex
              p="5%"
              flexDir="column"
              alignItems={navSize == "small" ? "center" : "flex-start"}
              as="nav"
            >
                <IconButton
                  aria-label="hamburger menu"
                  background="none"
                  mt={5}
                  _hover={{background: 'none'}}
                  icon={<FiMenu />}
                  onClick={() => {
                    if (navSize == "small")
                        changeNavSize("large")
                    else
                        changeNavSize("small")
                  }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard" />
                <NavItem navSize={navSize} icon={IoSearch} title="Search" />
                <NavItem navSize={navSize} icon={IoAlbumsOutline} title="Categories" />
                <NavItem navSize={navSize} icon={IoCartOutline} title="Shopping Cart" />
                <NavItem navSize={navSize} icon={IoOptionsOutline} title="Settings" />
                <NavItem navSize={navSize} icon={IoHandLeftOutline} title="Services" />
            </Flex>
            <Flex
              p="5%"
              flexDir="column"
              w="100%"
              alignItems={navSize == "small" ? "center" : "flex-start"}
              mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" name="Christopher Glinka" bg="blue.300" src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/269600247_2159263170892088_8784639679657528240_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4mtI8JvhTTcAX_LFr8X&_nc_ht=scontent.fyyc3-1.fna&oh=00_AT_64VWt3derqFMumwEIT2Wg2ejsFp6RQoO-DTWu7e4l7A&oe=6209FB4D" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Christopher Glinka</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}