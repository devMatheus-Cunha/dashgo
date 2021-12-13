import React, { ElementType } from "react";

// next
import Link from "next/link"

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
		<Link href={href} passHref>
			<ChakraLink display="flex" aling="center">
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{children}
				</Text>
			</ChakraLink>
		</Link>
	);
};
