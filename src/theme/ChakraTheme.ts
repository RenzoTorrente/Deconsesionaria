import { extendTheme } from "@chakra-ui/react";

const chakratheme = extendTheme({
  fonts: {
    body: "helvetica, sans-serif",
    heading: "arial",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      body: {
        overflowX:"hidden",
        bg:"gray.100",
        color: "gray.800",
         
      },
      a: {
        color: "#fff",
        _hover: {
         color:"gray.200"
        },
      },
    },
  },
  colors: {
    orangeC:{
      100: "#FF7F00",
      900: "#F18821",
    },
  },
});

export default chakratheme;