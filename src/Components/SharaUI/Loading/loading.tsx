import { Stack, Heading, Spinner, Flex,Text } from '@chakra-ui/react';
import React from 'react';

export function Loading ():JSX.Element{

 return(
 <Flex w="90%" justifyContent={"center"}  flexWrap={"wrap"}>
  
  
  <Spinner color='orangeC.100' size="xl"/><br/>
 <Text w="full" mt="10px"  align="center" fontSize="lg">Loading...</Text>
 </Flex>

 ) 
}