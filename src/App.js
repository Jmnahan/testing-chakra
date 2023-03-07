import { Flex, Heading, IconButton, Spacer, useColorMode, VStack, Link } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import Home from "./components/Home";
import Projects from './components/Projects';
import About from "./components/About";
import { Link as RouteLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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
      <Spacer></Spacer>
      <Link href='https://www.linkedin.com/in/ijhonamnhn/' target="_blank">
        <IconButton icon={<FaLinkedin />} isRound='true'></IconButton>
      </Link>
      <Link href='https://github.com/Jmnahan' target="_blank">
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Link>
      <IconButton ml={8} icon={isLight ? <FaMoon /> : <FaSun />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </VStack>
    // <div className="App">
    //   <header>THIS IS HEADER</header>
    //   <nav>NAV
    //     <ul>
    //       <li>Home</li>
    //       <li>Projects</li>
    //       <li>About</li>
    //     </ul>
    //   </nav>
    //   <div>Changing page</div>
    // </div>
  );
}

export default App;
