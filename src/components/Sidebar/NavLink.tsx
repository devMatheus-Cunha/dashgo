// chakra
import {
	Box, Stack, Text, Link, Icon,
} from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";

export const NavLink: React.FC<any> = ({ children, icon }: any) => {
	return (
		<Link display="flex" aling="center" href="/dashboard">
			<Icon as={icon} fontSize="20" />
			<Text ml="4" fontWeight="medium">
				{children}
			</Text>
		</Link>
	);
};
