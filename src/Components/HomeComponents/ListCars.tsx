import React, { MouseEvent } from 'react';
import { carview } from '../../utilities/types';
import { Box, Flex, Text, Button, Icon } from '@chakra-ui/react';
import styles from './listCars.module.css';
import { Emptymsg } from '../SharaUI/Empty/Emptymsg';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useMutation, useQueryClient } from 'react-query';
import { RemoveCarById } from '../../services/CarServices';
import { useNavigate } from 'react-router';

export function ListCars ({cars}:{cars:carview [] | []}):JSX.Element{
 const navigate = useNavigate();
if(cars.length < 1){
return (
    <Emptymsg text="vehiculo"/>
)
}
let queryClient = useQueryClient();
const {mutate, isLoading }:any = useMutation((RemoveCarById), {
    onSuccess:()=>queryClient.invalidateQueries("allcars")
})
  
function HandleDelete (e:MouseEvent<HTMLElement>, id:any){
e.preventDefault();
  mutate(id)
}

return (
    <Box className={styles.container_items}>
     {cars.map((elem:carview)=>(
     <Flex key={elem.id} className={styles.box_item}>
      <Box className={styles.box_titlecar}>
     <Text fontSize={"xl"} color="orangeC.100">{elem.name}</Text>   
     </Box>
     <Flex className={styles.box_actions}>
       <Button size="sm" colorScheme="orange" onClick={(e)=>{navigate(`/details/${elem.id}`)}}><Icon color="white" as={EditIcon}/></Button>  
       <Button size="sm" colorScheme={"red"} onClick={(e)=>HandleDelete(e, elem.id)}  disabled={isLoading && true} ><Icon color="white" as={DeleteIcon} /></Button> 
     </Flex>
     </Flex>
     ))

     }
    </Box>
   
)
}