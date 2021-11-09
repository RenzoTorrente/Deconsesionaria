import React from "react";
import { Box, Stack, Flex, Heading, Button, Text, Icon } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { GetAllCars } from "../../services/CarServices";
import { Loading } from "../SharaUI/Loading/loading";
import { Errormsg } from "../SharaUI/Error/Errormsg";
import { ListCars } from "./ListCars";
import { AddIcon } from '@chakra-ui/icons';
function RegisteredList(): JSX.Element {
  const { isLoading, isError, data, error }:any = useQuery("allcars", GetAllCars);
  return (
    <Stack w="80%" style={{margin:"0px auto"}}>
      <Flex
        w="100%"
        justifyContent={"space-around"}
        height={"70px"}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        <Box w="50%">
          <Heading as="h3" color={"orange.400"}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "20%",
                position: "absolute",
                bottom: 0,
                left: 0,
                bg: "gray.400",
                zIndex: -1,
              }}
            >
              Mis vehiculos
            </Text>
          </Heading>
        </Box>

        <Flex w="50%" justifyContent={"flex-end"} >
          <Button colorScheme={"orange"} size="sm">
            <Icon color="white"  as={AddIcon}/>
          </Button>
        </Flex>
      </Flex>
      <Box w="full">
        {isLoading && (<Loading />)}
        {isError && (<Errormsg />)}
        {data && (<ListCars cars={data.cars}/>)}
      </Box>
    </Stack>
  );
}
export default RegisteredList;
