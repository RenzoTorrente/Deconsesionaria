import {  Heading,  Flex, Text,Center } from "@chakra-ui/react";
import React from "react";

export function Emptymsg({ text }: { text: string }): JSX.Element {
  return (
    <Center mt={"40px"}>
      <Heading as="h5" size="lg" mt={"40px"}>
          Aún no tienes ningún   <Text as={'span'}  color={'orangeC.100'} >{text} agregado </Text>
      </Heading>
    </Center>
  );
}