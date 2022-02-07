import { useColorMode, Switch, Flex, Button, IconButton, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FaHamburger, FaTimesCircle } from "react-icons/fa";
import NextLink from 'next/link';

const navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    return (
        <Flex>
            <Flex 
              pos="absolute"
              top="1rem"
              right="2rem"
              align="center"
            >   
                <Flex
                  display={['none', 'none', 'flex', 'flex']}
                >
                  <NextLink href="/" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      aria-label="Home"
                      my={5}
                      w="100%"
                    >
                      Home
                    </Button>
                  </NextLink>
                  <NextLink href="/" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      aria-label="Home"
                      my={5}
                      w="100%"
                    >
                      About
                    </Button>
                  </NextLink>
                  <NextLink href="/" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      aria-label="Home"
                      my={5}
                      w="100%"
                    >
                      Contact
                    </Button>
                  </NextLink>
                </Flex>
                <IconButton 
                  aria-label="Open Menu"
                  size="lg"
                  mr={2}
                  icon={<FaHamburger />}
                  display={['flex', 'flex', 'none', 'none']}
                  onClick={() => changeDisplay('flex')}
                />
                <Switch 
                  color="orange"
                  isChecked={isDark}
                  onChange={toggleColorMode}
                />  
            </Flex>
            <Flex
              w="100vw"
              bgColor="gray.50"
              zIndex={20}
              h="100vh"
              pos="fixed"
              top="0"
              left="0"
              overflowY="auto"
              flexDir="column"
              display={display}
            >
                <Flex justify="flex-end">
                    <IconButton 
                      mt={2}
                      mr={2}
                      aria-label="Close Menu"
                      size="lg"
                      icon={<FaTimesCircle />}
                      onClick={() => changeDisplay('none')}
                    />
                </Flex>
                <Flex
                  flexDir="column"
                  align="center"
                >
                    <NextLink href="/" passHref>
                        <Button
                        as="a"
                        variant="ghost"
                        aria-label="Home"
                        my={5}
                        w="100%"
                        >
                        Home
                        </Button>
                    </NextLink>
                    <NextLink href="/" passHref>
                        <Button
                        as="a"
                        variant="ghost"
                        aria-label="Home"
                        my={5}
                        w="100%"
                        >
                        About
                        </Button>
                    </NextLink>
                    <NextLink href="/" passHref>
                        <Button
                        as="a"
                        variant="ghost"
                        aria-label="Home"
                        my={5}
                        w="100%"
                        >
                        Contact
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Flex> 
    )
}

export default navbar;