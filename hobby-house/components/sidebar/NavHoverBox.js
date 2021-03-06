import React from "react";
import { 
    Flex,
    Heading,
    Text,
    Icon 
} from "@chakra-ui/react";

export default function NavHoverBox({ icon, title, description }) {
    return (
        <>
            <Flex 
              pos="absolute"
              mt="calc(100px - 7.5px)"
              ml="-10px"
              w={0}
              h={0}
              borderTop="10px solid transparent"
              borderBottom="10px solid transparent"
              borderRight="10px solid #EF7B45"
            />
            <Flex
              h={200}
              w={200}
              flexDir="column"
              alignItems="center"
              justify="center"
              backgroundColor="#EF7B45"
              borderRadius="10px"
              color="white"
              textAlign="center"
            >
                <Icon as={icon} fontSize="3x1" mb={4} />
                <Heading size="md" fontWeight="normal">{title}</Heading>
                <Text>{description}</Text>
            </Flex>
        </>  
    )
}