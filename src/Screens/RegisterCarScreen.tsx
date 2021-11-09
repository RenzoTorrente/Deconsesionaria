import React from 'react';
import { Stack,Box } from '@chakra-ui/react';
import RegisteredList from '../Components/HomeComponents/RegisteredList';
import RegisterCars from '../Components/FormCars/RegisterCars';
function RegisterScreen():JSX.Element{

    return(
        <Box w="100%" minH={"500px"} >
        <Stack margin="50px auto"  alignContent={"center"} w="400px" h="300px">
         <RegisterCars/>

        </Stack>
        </Box>
    )
}
export default RegisterScreen;