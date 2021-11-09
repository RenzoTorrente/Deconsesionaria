import React from 'react';
import {Button,Flex,FormControl,FormLabel,Heading,Select,Input,Stack,Image,FormHelperText} from '@chakra-ui/react';
  import styles from './PropertyForms.module.css'
import { useForm } from 'react-hook-form';
import { name,nuevapropiedad, categorias } from '../../constants/constants';
import { formvalues } from '../../helpers/types';
  export default function PropertyForms() {
    let {register, handleSubmit, formState:{errors, isSubmitting}} = useForm({mode:"onTouched"});

    function OnSubmit(values:formvalues){
      console.log(values);

    }
    return (
      <Stack className={styles.form_property} direction={{ base: 'column', md: 'row' }} >
        <Flex className={styles.form_box}>
      
        <Stack className={styles.wrapper} spacing={8}>
            <Heading fontSize={'2xl'}>Crea una nueva propiedad</Heading>
           <form onSubmit={handleSubmit(OnSubmit)}>
           <Stack spacing={10} w={'full'} maxW={'md'}>
            <FormControl id="email">
              <FormLabel>nombre de la propiedad</FormLabel>
          <Input type={nuevapropiedad.TYPE} {...register(nuevapropiedad.FIELDNAME,{
           required:name.MSGREQUIRED ,
            minLength:{
            value:name.MINLONGNAME ,
           message:name.MSGERRMINAME    
           },
            maxLength:{
            value:name.MAXLONGNAME,
            message:name.MSGERRMAXNAME,
           }
           })}/>
         <FormHelperText color="red" fontSize={"sm"}>{errors.newprop?.message ? errors.newprop.message : "  "}</FormHelperText>
            </FormControl>
        <FormControl>
         <FormLabel >Servicio</FormLabel>
        <Select   {...register(categorias.FIELDNAME,
        {
          required:categorias.REQUIRED
        })} >
        <option  hidden={true} value="">selecciona una propiedad </option>
        <option  value="Sitio web y redes sociales">Sitio web y redes sociales</option>
        <option value="redes sociales">Redes sociales</option>
        <option value="Posicionamiento">Posicionamiento</option>
        </Select>
        <FormHelperText color="red" fontSize={"sm"}>{errors.categoria?.message ? errors.categoria.message : "   "}</FormHelperText>
        </FormControl>
            <Flex spacing={7} className={styles.container_button}>
              <Button type="submit" colorScheme={'orange'} size="md" >
                Crear propiedad
              </Button>
            </Flex>
            </Stack>
            </form>
          </Stack>
        
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'deconsesionarias.com'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }