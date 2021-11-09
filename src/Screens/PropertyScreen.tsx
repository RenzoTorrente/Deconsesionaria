import React from 'react';
import { Box,Stack, Flex} from '@chakra-ui/react';
import PropertyForms from '../Components/Propertyforms/PropertyForms';
function PropertyScreen():JSX.Element{

    return(
        <Flex w="100%" minH={"100vh"} alignItems={"center"} justifyContent={"center"} >
        <Stack margin="50px auto">
       
        <PropertyForms/>
        </Stack>
        </Flex>
    )
}
export default PropertyScreen;