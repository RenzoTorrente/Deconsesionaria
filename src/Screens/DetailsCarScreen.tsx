import React from 'react';
import { Stack, Box,Flex } from '@chakra-ui/react';
import PropertyList from '../Components/PropertyList/PropertyList';
function DetailsCarScreen():JSX.Element{

    return(
        <Flex w="100%" minH={"100vh"} alignItems={"center"} justifyContent={"center"} >
        <Stack margin="30px 0px" w="80%">
        <PropertyList/>
        </Stack>
        </Flex>
    )
}
export default DetailsCarScreen;