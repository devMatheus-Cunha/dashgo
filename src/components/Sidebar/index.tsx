import React from "react";

// chakra
import {
	Box,
	useBreakpointValue,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
} from "@chakra-ui/react";

// components
import SidebarNav from "./SidebarNav";

//--------------------------
// Export
//--------------------------
export const Sidebar = () => {
	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false,
	});
	if (isDrawerSidebar) {
		return (
			<Drawer isOpen placement="left" onClose={() => undefined}>
				<DrawerOverlay>
					<DrawerContent bg="gray.800" p="4">
						<DrawerCloseButton mt="6" />
						<DrawerHeader>Naveegação</DrawerHeader>
						<DrawerBody>
							<SidebarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		)
	}
	return (
		<Box as="aside" w="64" mr="8">
			<SidebarNav />
		</Box>
	);
};
