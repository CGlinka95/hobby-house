import { 
    Heading,
    useColorMode, 
    Switch, 
    Flex, 
    Button, 
    IconButton 
  } from "@chakra-ui/react";
import { useState } from "react";
import { 
    FaHamburger, 
    FaTimesCircle 
  } from "react-icons/fa";
import NextLink from 'next/link';
import Logo from "./Logo";

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    return (
        <Flex justifyContent="space-around">
          <Flex alignItems="center">
            <Heading color="#EF7B45" pr="5px">Hobby House</Heading>
            <Logo />
          </Flex>
            <Flex align="center">  
              <Flex display={['none', 'none', 'flex', 'flex']}>
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
                <NextLink href="" passHref>
                  <Button
                      as="a"
                      variant="ghost"
                      aria-label="About"
                      my={5}
                      w="100%"
                      color="#EF7B45"
                  >
                    About
                  </Button>
                </NextLink>
                <NextLink href="" passHref>
                  <Button
                      as="a"
                      variant="ghost"
                      aria-label="Contact"
                      my={5}
                      w="100%"   
                  >
                    Contact
                  </Button>
                </NextLink>
                <NextLink href="" passHref>
                  <Button
                      as="a"
                      variant="ghost"
                      aria-label="Login"
                      my={5}
                      w="100%"
                      color="#EF7B45"
                  >
                    Login
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
                  color="blue.500"
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
                    mr={5}
                    aria-label="Close Menu"
                    size="lg"
                    icon={<FaTimesCircle />}
                    onClick={() => changeDisplay('none')}
                    backgroundColor="gray.300"
                    _hover={{backgroundColor: '#EF7B45'}}
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
                      color="gray.500"
                      my={5}
                      w="100%"
                      _hover={{backgroundColor: '#EF7B45', color: '#ffffff'}}
                  >
                      Home
                  </Button>
                </NextLink>
                <NextLink href="" passHref>
                  <Button
                     as="a"
                     variant="ghost"
                     aria-label="About"
                     color="gray.500"
                     my={5}
                     w="100%"
                     _hover={{backgroundColor: '#EF7B45', color: '#ffffff'}}
                   >
                     About
                  </Button>
                </NextLink>
                <NextLink href="" passHref>
                  <Button
                     as="a"
                     variant="ghost"
                     aria-label="Contact"
                     color="gray.500"
                     my={5}
                     w="100%"
                     _hover={{backgroundColor: '#EF7B45', color: '#ffffff'}}
                  >
                     Contact
                 </Button>
                </NextLink>
                <NextLink href="" passHref>
                  <Button
                     as="a"
                     variant="ghost"
                     aria-label="Login"
                     color="gray.500"
                     my={5}
                     w="100%"
                     _hover={{backgroundColor: '#EF7B45', color: '#ffffff'}}
                  >
                    Login
                  </Button>
                </NextLink>
              </Flex>
            </Flex>
      </Flex> 
    )
}