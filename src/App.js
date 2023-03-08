import { Flex, Heading, IconButton, Spacer, useColorMode, VStack, Link, Menu, MenuList, MenuItem, MenuButton, Button } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import Home from "./components/Home";
import Projects from './components/Projects';
import About from "./components/About";
import { Link as RouteLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';
import profilePic from "./assets/avataaars.png"

import {
  Box,
  Avatar,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light"

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading ml="8" size="md" fontWeight="semibold" color="#edb60d">Jmnahan</Heading>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <IconButton ml={8} icon={isLight ? <FaMoon /> : <FaSun />} isRound="true" onClick={toggleColorMode}>
              </IconButton>
              <Menu>
                <MenuButton
                  as={Button}
                  p={2} py={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  Menu
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <MenuItem><Link as={RouteLink} to={"/Home"}>Home</Link></MenuItem>
                  <MenuItem><Link as={RouteLink} to={"/projects"}>Projects</Link></MenuItem>
                  <MenuItem><Link as={RouteLink} to={"/About"}>About</Link></MenuItem>
                  <Link href='https://www.linkedin.com/in/ijhonamnhn/' target="_blank">
                    <IconButton ml={2} icon={<FaLinkedin />} isRound='true'></IconButton>
                  </Link>
                  <Link href='https://github.com/Jmnahan' target="_blank">
                    <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
                  </Link>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Flex alignContent={'center'} justifyContent={'center'}>
        <Routes basename="/testing-chakra">
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Flex>
    </>
  );
}

export default App;
