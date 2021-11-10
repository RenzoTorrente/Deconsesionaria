import React from 'react';
import { Box,Stack, Flex} from '@chakra-ui/react';
import PropertyForms from '../Components/Propertyforms/PropertyForms';
import { useQuery } from 'react-query';
import GetCategories from '../services/CategorieService';
import { Loading } from '../Components/SharaUI/Loading/loading';
import { Errormsg } from '../Components/SharaUI/Error/Errormsg';
function PropertyScreen():JSX.Element{

let  {isLoading, isError, data, error} = useQuery('categories', GetCategories);
    return(
        <Flex w="100%" minH={"100vh"} alignItems={"center"} justifyContent={"center"} >
        <Stack margin="50px auto">
         {isLoading && (<Loading/>)}
         {isError && (<Errormsg/>)}
         {data && (<PropertyForms categories={data.categories}/>)}
       
        
    
        </Stack>
        </Flex>
    )
}
export default PropertyScreen;