import {  Heading,  Flex, Text,Center } from "@chakra-ui/react";
import React from "react";

export function Errormsg({ text }: { text?: any }): JSX.Element {
  return (
    <Center mt="30px">
      <Heading as="h5">
          Ocurrió un error  <Text as={'span'} color={'orangeC.100'} size="2xl">
        {text ? (
             `: ${text}` 
           ):(
            'intenete nuevamente'
           )}
          </Text>
      </Heading>
    </Center>
  );
}
