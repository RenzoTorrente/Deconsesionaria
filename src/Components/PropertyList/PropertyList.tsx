import React from 'react';
import styles from './PropertyList.module.css';
import { Grid,Box, GridItem, Flex, Button,Text } from "@chakra-ui/react";
import { GetCategories } from '../../pseudodata/datafake';
import PropertyScore from '../PropertyScore/PropertyScrore';
function PropertyList():JSX.Element{

 return (
 <Box className={styles.container_property} >
  <Grid className={styles.grid_wrap} templateColumns="repeat(8, 1fr)" gap={3}>
   {GetCategories().map(elem=>(
        <Flex wrap={"wrap"}  w="100%" height={"80px"} >
        <button className={styles.button_list}>
         <Text fontSize={"sm"}>{elem.name}</Text>
        </button>
        </Flex>
   ))}
</Grid>
<Grid templateColumns="repeat(2, 1fr)" gap={10} className={styles.wrapper_score}>
{ GetCategories().map((elem:any)=>(
<PropertyScore property={elem}/>
))}
</Grid>
 </Box>
 )   
}
export default PropertyList;