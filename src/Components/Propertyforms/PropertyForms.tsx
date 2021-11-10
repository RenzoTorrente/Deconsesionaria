import React, { useState } from "react";
import { Button,Flex,FormControl, FormLabel, Heading,Select, Input, Stack, Image,FormHelperText, Text} from "@chakra-ui/react";
import styles from "./PropertyForms.module.css";
import { useForm } from "react-hook-form";
import { name, nuevapropiedad, categorias } from "../../constants/constants";
import { categories, formpropertyvalues } from "../../utilities/types";
import { CreateProperty } from "../../services/PropertyService";
export default function PropertyForms({
  categories,
}: {
  categories: categories[] | any[];
}) {
let {register,handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm(
 { mode: "onTouched" });
 let [submit, setsubmit] = useState({disabledbutton: false ,errormesagge: "",});
  async function OnSubmit(values: formpropertyvalues, e: any) {
    try {
     let propresp = await CreateProperty(values);
      setsubmit({ ...submit, disabledbutton: false });
      reset();
    } catch (err) {
      setsubmit({
        disabledbutton: false,
        errormesagge: "no se pudo crear el vehiculo",
      });
      const timer = setTimeout(() => {
        setsubmit({ ...submit, errormesagge: "" });
      }, 5000);
      reset();
    }
  }
  return (
    <Stack
      className={styles.form_property}
      direction={{ base: "column", md: "row" }}
    >
      <Flex className={styles.form_box}>
        <Stack className={styles.wrapper} spacing={8}>
          <Heading fontSize={"2xl"}>Crea una nueva propiedad</Heading>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <Stack spacing={10} w={"full"} maxW={"md"}>
              <FormControl id="name">
                <FormLabel>nombre de la propiedad</FormLabel>
                <Input
                  type={nuevapropiedad.TYPE}
                  {...register(nuevapropiedad.FIELDNAME, {
                    required: name.MSGREQUIRED,
                    minLength: {
                      value: name.MINLONGNAME,
                      message: name.MSGERRMINAME,
                    },
                    maxLength: {
                      value: name.MAXLONGNAME,
                      message: name.MSGERRMAXNAME,
                    },
                  })}
                />
                <FormHelperText color="red" fontSize={"sm"}>
                  {errors.newprop?.message ? errors.newprop.message : " "}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>categoria</FormLabel>
                <Select
                  {...register(categorias.FIELDNAME, {
                    required: categorias.REQUIRED,
                  })}
                >
                  <option hidden={true} value="">
                    selecciona una categoria
                  </option>
                  {categories.length >= 1 ? (
                    categories.map((categorie: categories) => (
                      <option key={categorie.id} value={categorie.id}>
                        {categorie.name}
                      </option>
                    ))
                  ) : (
                    <option hidden={true} value="">
                      Aún no tienes categorias
                    </option>
                  )}
                </Select>
                <FormHelperText color="red" fontSize={"sm"}>
                  {errors.categoria?.message ? errors.categoria.message : " "}
                </FormHelperText>
              </FormControl>
              <Flex spacing={7} flexWrap={"wrap"} className={styles.container_button}>
                <Button w="full" type="submit" colorScheme={"orange"} size="md" disabled={submit.disabledbutton === true && true}>
                  Crear
                </Button>
                <Text align="center" w="full" fontSize={"sm"} color="red">{submit.errormesagge ? submit.errormesagge : " " }</Text>
              </Flex>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"deconsesionarias.com"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
