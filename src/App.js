import { Flex, Heading, IconButton, Spacer, useColorMode, VStack, Link, Menu, MenuList, MenuItem, MenuButton, Button } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import Home from "./components/Home";
import Projects from './components/Projects';
import About from "./components/About";
import { Link as RouteLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';


function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light"

  return (
    <VStack p={5}> 
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="#edb60d">Jmnahan</Heading>
        <Link ml={8} as={RouteLink} to={"/Home"}>Home</Link>
        <Link ml={2} as={RouteLink} to={"/projects"}>Projects</Link>
        <Link ml={2} as={RouteLink} to={"/About"}>About</Link>
      <Menu>
        <MenuButton as={Button} ml={2}>
          <HamburgerIcon w={5} h={5} />
        </MenuButton>
        <MenuList>
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
      <Spacer></Spacer>
      <Link href='https://www.linkedin.com/in/ijhonamnhn/' target="_blank">
        <IconButton icon={<FaLinkedin />} isRound='true'></IconButton>
      </Link>
      <Link href='https://github.com/Jmnahan' target="_blank">
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Link>
      <IconButton ml={8} icon={isLight ? <FaMoon /> : <FaSun />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Routes basename="/testing-chakra">
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </VStack>
  );
}

export default App;
