import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Flex, Box, Text, Heading,Stack,Select,Button, FormControl, FormLabel,Input, FormHelperText } from '@chakra-ui/react';
import styles from './RegisterCars.module.css';
import { name, propiedades } from '../../constants/constants';
import { formvalues } from '../../utilities/types';
import { AddCar } from '../../services/CarServices';

function RegisterCars({cars}:{cars?:any}):JSX.Element{
let {register, handleSubmit, formState:{errors, isSubmitting}} = useForm({mode:"onTouched"});
let [submit, setsubmit] = useState({
  disabledbutton : false,
  errormesagge: ""
})
async function OnSubmit(values:formvalues, e:any){
setsubmit({...submit, disabledbutton:true})
try{
let res = await AddCar(values.carname);
console.log(res);
setsubmit({...submit, disabledbutton:false});
e.target.reset();
}catch(err){
setsubmit({disabledbutton: false, errormesagge:"no se pudo crear el vehiculo"});
const timer = setTimeout(() => {
  setsubmit({ ...submit, errormesagge: "" });
}, 5000);
e.target.reset();
}
  

}
return(
<Stack className={styles.container_form}>
<Box w="100%"  height={"auto"} pt={3}>
<Text  align="center" fontSize={"4xl"} >{cars ? "Edita tu vehiculo" : "Registra tu vehiculo" }</Text>
</Box>
  <Flex className={styles.box_form}>
   <form onSubmit={handleSubmit(OnSubmit)} className={styles.form_area}>
   <FormControl mb={8}>
    <FormLabel>Nombre del auto</FormLabel> 
    <Input type={name.TYPE} {...register(name.FIELDNAME,{
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
    <FormHelperText color="red" fontSize={"sm"}>{errors.carname?.message ? errors.carname.message : " "}</FormHelperText>
   </FormControl>
 
        
          <Button
          width={"full"}
          type="submit"
           colorScheme={"orange"}
           size="md"
           disabled={submit.disabledbutton === true && true}
           >
            Agregar
          </Button>
      <Text fontSize={"sm"} color="red">{submit.errormesagge}</Text>

   </form>
  </Flex>
</Stack>
)    
}
export default RegisterCars;