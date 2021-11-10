import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/react";

export const Footer = (): React.ReactElement => {
  return (
    <Flex
      bg="orangeC.100"
      bottom={1}
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
      padding={3}
      marginTop={"100px"}

    >
      <HStack spacing={8}   heigth="100%">
        <Text alignItems={"center"} color="white">&copy; Renzo Torrente 2021</Text>
      </HStack>
    
    </Flex>
  );
};
