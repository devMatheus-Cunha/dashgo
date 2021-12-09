import React, { ReactNode } from "react";

// chakra
import { Box, Stack, Text } from "@chakra-ui/react";

// interface
interface INavSectionProps {
	title: string;
	children: ReactNode; // O tipo ReactNode Aceita tudo o que eu posso colocar dentro de uma tag React
}

//--------------------------
// Export
//--------------------------
export const NavSection: React.FC<any> = ({ title, children }: INavSectionProps) => {
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
