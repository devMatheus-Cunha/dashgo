import React from "react";

// chakra
import {
	Box, Stack,
} from "@chakra-ui/react";

// icons
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";

// components
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

//--------------------------
// Export
//--------------------------
export const Sidebar = () => {
	return (
		<Box as="aside" w="64" mr="8">
			<Stack spacing="12" aling="flex-start">
				<NavSection title="GERAL">
					<NavLink icon={RiDashboardLine} href="/dashboard">
						Dashboard
					</NavLink>
					<NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
				</NavSection>

				<NavSection title="AUTOMAÇÃO">
					<NavLink icon={RiInputMethodLine} href="/form">Formulários</NavLink>
					<NavLink icon={RiGitMergeLine} href="/automatic">Automação</NavLink>
				</NavSection>
			</Stack>
		</Box>
	);
};
