import React from "react";

// chakra
import {
	Box, Stack, Text, Link, Icon,
} from "@chakra-ui/react";

// icons
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

//--------------------------
// Export
//--------------------------
export const Sidebar: React.FC = () => {
	return (
		<Box as="aside" w="64" mr="8">
			<Stack spacing="12" aling="flex-start">
				<NavSection title="GERAL">
					<NavLink icon={RiDashboardLine}>Dashboard</NavLink>
					<NavLink icon={RiContactsLine}>Usuários</NavLink>
				</NavSection>

				<NavSection title="AUTOMAÇÃO">
					<NavLink icon={RiInputMethodLine}>Formulários</NavLink>
					<NavLink icon={RiGitMergeLine}>Automação</NavLink>
				</NavSection>
			</Stack>
		</Box>
	);
};
