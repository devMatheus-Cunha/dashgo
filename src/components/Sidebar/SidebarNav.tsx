import React from "react";
import {
	Stack,
} from "@chakra-ui/react";
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from "react-icons/ri";

import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

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
				<NavLink icon={RiInputMethodLine} href="/form">
					Formulários
				</NavLink>
				<NavLink icon={RiGitMergeLine} href="/automatic">
					Automação
				</NavLink>
			</NavSection>
		</Stack>
	);
};

export default SidebarNav;
