import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import CarouselProductWeb from '../Components/CarouselComponents/carouselProductWeb';
import RegisteredList from '../Components/HomeComponents/RegisteredList';
function HomeScreen():JSX.Element{

    return(
        <Box minH={"100vh"}  >
        <CarouselProductWeb/>
        <RegisteredList/>
        
        </Box>
    )
}
export default HomeScreen;