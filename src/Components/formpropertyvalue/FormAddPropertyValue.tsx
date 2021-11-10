import React from 'react';
import { useForm } from 'react-hook-form';
import { Stack, FormControl, Text, SimpleGrid, Select, Flex, Button, Box, Heading,Icon } from '@chakra-ui/react';
import {property} from '../../constants/constants';
import { carview, propertie } from '../../utilities/types';
import { addVehicleProperty, GetAllsProperties } from '../../services/PropertyService';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import styles from './formpropertyvalue.module.css';
import { AddIcon } from '@chakra-ui/icons';
function FormAddPropertyValue({car}:{car:carview}){
 const {data,isError, isLoading, error} = useQuery(['vehicleproperties', car.id],()=>GetAllsProperties(car.id));
 let queryClient = useQueryClient();
  
 let {handleSubmit,register,reset, formState: { errors, isSubmitting, }} = useForm({mode:"onTouched"})

async function onSubmit(value:any, e:any){
e.preventDefault();
let respaddvehicle = await addVehicleProperty(car.id, value.categoria);
queryClient.invalidateQueries("vehicleproperties")

reset()
}
 return (
<Stack  className={styles.form_inline} >
    
<SimpleGrid  columns={{ base: 1, md: 2 }}  spacing={6}>
<Box>
 <Text fontSize={"xl"}>Agrega una propiedad al vehiculo <Text as="span" color="orangeC.100">{car.name}</Text> </Text>
</Box>
<form onSubmit={handleSubmit(onSubmit)} >
<FormControl >
<Select
          {...register(property.FIELDNAME, {
                    required:property.REQUIRED,
                  })}
                
                >
                  <option hidden={true} value="">
                    selecciona una categoria
                  </option>
                  {data && data.length >= 1 ? (
                    data.map((propertie:propertie) => (
                      <option key={propertie.id} value={propertie.id}>
                        {propertie.name}
                      </option>
                    ))
                  ) : (
                    <option value={undefined}>
                    Aún no tienes categorias
                  </option>
                  )}
                </Select>
                          

         <Text fontSize="md" color="red">
           {errors.apellido?.message ? errors.apellido.message : ""}
         </Text>
          
         </FormControl>
         <Flex w="full" mt="10px" justifyContent={"flex-end"}>
         <Button colorScheme={"orange"} type="submit" size="sm" >  <Icon color="white" w={3} h={3} as={AddIcon}/></Button>

         </Flex>
         </form>
         </SimpleGrid>

    

 </Stack>
 )   

}
export default FormAddPropertyValue;