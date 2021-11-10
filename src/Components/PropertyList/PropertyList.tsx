
import React from 'react';
import { Box } from "@chakra-ui/react";
import { carview, categories } from '../../utilities/types';
import { useQuery, QueryCache} from 'react-query';
import { Loading } from '../SharaUI/Loading/loading';
import { Errormsg } from '../SharaUI/Error/Errormsg';
import GetCategories from '../../services/CategorieService';
import Properties from '../../Components/PropertyList/Properties';
function PropertyList({car}:{car:carview}):JSX.Element{
const {data, isLoading, error} = useQuery("categories", GetCategories);
if(isLoading){
 return (
<Loading/>
)
}else if(error) {
return (
 <Errormsg/>
)
}
 return (  
  <Properties  allcategories={data.categories} carid={car.id}/>
 )   
}
export default PropertyList;