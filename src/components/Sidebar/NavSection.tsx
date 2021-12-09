import React from "react";
// chakra

import {
	Box, Stack, Text, Link, Icon,
} from "@chakra-ui/react";

// icons
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

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
