import React, { ElementType } from "react";

// chakra
import {
	Text, Icon, Link as ChakraLink, LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

// interface
interface INavLinkProps extends ChakraLinkProps {
	icon: ElementType; // When I pass the reference of a component, i.e. its name
	children: string;
	href: string;
}

//--------------------------
// Export
//--------------------------
export const NavLink = ({ children, icon, href }: INavLinkProps) => {
	return (
		<ChakraLink display="flex" aling="center" href={href}>
			<Icon as={icon} fontSize="20" />
			<Text ml="4" fontWeight="medium">
				{children}
			</Text>
		</ChakraLink>
	);
};
