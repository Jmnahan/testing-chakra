import { Stack, useColorMode, Flex, Box, Text, Image } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import profilePic from "../assets/avataaars.png"
import React from 'react';

function Home() {

  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  
  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start">
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
        backgroundColor="gray.700" boxShadow="lg"
        boxSize="300px" src={profilePic} alt="profile-pic"/>
        <Box mx={isNotSmallerScreen ? 16 : 0} align='flex-start'>
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
          <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, #e7c14d, #e9b929, #f5c226)" bgClip='text' >Jhona Manahan</Text>
          <Text color={isLight ? "gray.200" : "gray.500"}>Put some text here</Text>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Home