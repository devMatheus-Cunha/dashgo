import React from "react";

// next
import { AppProps } from "next/app";

// chakra
import { ChakraProvider } from "@chakra-ui/react";

// theme
import { theme } from "../styles/theme";

// context
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

// mirage
import { makeServer } from "../services/mirage";

// start server mirage
if (process.env.NODE_ENV === "development") {
	makeServer()
}

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
