import React from "react";

// chakra
import { Box, Stack, Text } from "@chakra-ui/react";

//--------------------------
// Export
//--------------------------
export const NavSection: React.FC<any> = ({ title, children }) => {
	return (
		<Box>
			<Text fontWeight="bold" color="gray.400" fontSize="small">
				{title}
			</Text>
			<Stack spacing="4" mt="8" alinf="stretch">
				{children}
			</Stack>
		</Box>
	);
};
