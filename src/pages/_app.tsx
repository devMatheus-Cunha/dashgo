import React from "react";

// next
import { AppProps } from "next/app";

// chakra
import { ChakraProvider } from "@chakra-ui/react";

// theme
import { theme } from "../styles/theme";

// context
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

//--------------------------
// Export
//--------------------------
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<SidebarDrawerProvider>
				<Component {...pageProps} />
			</SidebarDrawerProvider>
		</ChakraProvider>
	);
}

export default MyApp;
