import React from "react";

// next
import { AppProps } from "next/app";

// react-query
import { QueryClient, QueryClientProvider } from "react-query";

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

const queryClient = new QueryClient()

//--------------------------
// Export
//--------------------------
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerProvider>
					<Component {...pageProps} />
				</SidebarDrawerProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
