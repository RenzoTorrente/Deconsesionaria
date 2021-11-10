import React, { useState, useEffect, MouseEvent } from 'react';
import PropertyScore from '../PropertyScore/PropertyScrore';
import styles from './PropertyList.module.css';
import { Grid,Box, GridItem, Flex, Button,Text } from "@chakra-ui/react";
import {  categories } from '../../utilities/types';
import { useQuery , useQueryClient,useMutation } from 'react-query';
import { getVehicleProperties } from '../../services/PropertyService';
import { Emptymsg } from '../SharaUI/Empty/Emptymsg';
import { Errormsg } from '../SharaUI/Error/Errormsg';
import {Loading} from '../SharaUI/Loading/loading';
function Properties ({allcategories, carid}:{allcategories:categories[] | [], carid:number}):JSX.Element{
 let [catid, setcatid] = useState(1);
  const {data,isError, isLoading} = useQuery(["users",  catid, carid],() => getVehicleProperties(catid, carid) );
  function categoryChange(e:any, values:number){
  e.preventDefault();
  setcatid(values);
  }
return (
<Box className={styles.container_property}>
 <Grid className={styles.grid_wrap} templateColumns="repeat(8, 1fr)" gap={3}>
  
   {allcategories.map((elem:categories)=>(
        <Flex key={elem.id} wrap={"wrap"}  w="100%" height={"80px"} >
        <button onClick={(e)=>{categoryChange(e, elem.id)}} className={styles.button_list} >
         <Text fontSize={"sm"}>{elem.name}</Text>
        </button>
        </Flex>
   ))}
</Grid>

{data && data.length ? (
<Grid templateColumns="repeat(2, 1fr)" gap={10} className={styles.wrapper_score}>

{data.map((elem:any)=>(
    <Box key={elem.id}>
     <PropertyScore prop={elem} carid={carid} />
    </Box>
))
  
}
</Grid> 
)
 : " "
}


</Box>
)

}
export default Properties;