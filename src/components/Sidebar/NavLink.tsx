// chakra
import {
	Text, Link, Icon,
} from "@chakra-ui/react";

//--------------------------
// Export
//--------------------------
export const NavLink: React.FC<any> = ({ children, icon, href }: any) => {
	return (
		<Link display="flex" aling="center" href={href}>
			<Icon as={icon} fontSize="20" />
			<Text ml="4" fontWeight="medium">
				{children}
			</Text>
		</Link>
	);
};
