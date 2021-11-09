import React, { ReactChild } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, Link } from "react-router-dom";

export function NavbarHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Box
   width={"100vw"}
      padding={6}
      bg="orange.400"
    >
      <Stack 
       as="nav"
       align="center"
       justify="space-between"
       wrap="wrap"
       w={"90%"}
       margin={"0px auto"}
       flexDirection={"row"}
       flexWrap={"wrap"}
       >
      <Flex align="center" mr={5} w="50%">
        <Heading as="h1" color="white" size="lg" letterSpacing={"tighter"}>
          De Consesionaria
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Flex
    
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto", lg:"40%" }}
        alignItems="center"
        flexGrow={1}

        justifyContent={"space-around"}
        
        mt={{ base: 4, md: 0 }}
      >
     <NavLink  to="/"><p>inicio</p></NavLink>
     <NavLink   to="/register"><p>Registrar vehiculo</p></NavLink>
     <NavLink   to="/propertys"><p>Crear propiedad</p></NavLink>
      </Flex>

      </Stack>
      
    </Box>
  
  );
};

