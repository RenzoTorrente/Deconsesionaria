import React, { useState } from 'react';
import { Stack, Box,Flex } from '@chakra-ui/react';
import PropertyList from '../Components/PropertyList/PropertyList';
import { useParams, useNavigate } from 'react-router';
import { useQuery } from 'react-query';
import { GetCarById } from '../services/CarServices';
import { Loading } from '../Components/SharaUI/Loading/loading';
import FormAddPropertyValue from '../Components/formpropertyvalue/FormAddPropertyValue';
function DetailsCarScreen():JSX.Element{
let navigate = useNavigate();
let {carid} = useParams();
const {data,isError, isLoading, error} = useQuery(['car', carid],()=>GetCarById(carid));
let [mutate , setmutate] = useState();
    return(
        <Flex w="100%" minH={"100vh"} alignItems={"center"} justifyContent={"center"} >
        
       
        {isLoading && (<Loading/>)}
        {error && navigate('/')}
        {data && (

       <Stack margin="30px 0px" w="80%"> 
        <FormAddPropertyValue   car={data.car}/>
        <PropertyList car={data.car}/>
        </Stack>
        )
     }
        
      
        </Flex>
    )
}
export default DetailsCarScreen;