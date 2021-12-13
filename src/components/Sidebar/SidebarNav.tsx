import React from "react";

// chakra
import {
	Stack,
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
const SidebarNav: React.FC = () => {
	return (
		<Stack spacing="12" aling="flex-start">
			<NavSection title="GERAL">
				<NavLink icon={RiDashboardLine} href="/dashboard">
					Dashboard
				</NavLink>
				<NavLink icon={RiContactsLine} href="/users">
					Usuários
				</NavLink>
			</NavSection>

			<NavSection title="AUTOMAÇÃO">
				<NavLink icon={RiInputMethodLine} href="/forms">
					Formulários
				</NavLink>
				<NavLink icon={RiGitMergeLine} href="/automation">
					Automação
				</NavLink>
			</NavSection>
		</Stack>
	);
};

export default SidebarNav;
