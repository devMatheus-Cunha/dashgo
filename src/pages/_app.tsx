import { AppProps } from "next/app";

// chakra
import { ChakraProvider } from "@chakra-ui/react";

// theme
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
