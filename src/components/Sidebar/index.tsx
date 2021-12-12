import React from "react";

// chakra
import {
	Box,
	useBreakpointValue,
} from "@chakra-ui/react";

// components
import SidebarNav from "./SidebarNav";

// contexts
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { DrawerSidebar } from "./DrawerSidebar";

//--------------------------
// Export
//--------------------------
export const Sidebar = () => {
	// hooks
	const { onClose, isOpen } = useSidebarDrawer();

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false,
	});
	if (isDrawerSidebar) {
		return (
			<DrawerSidebar onClose={onClose} isOpen={isOpen}>
				<SidebarNav />
			</DrawerSidebar>
		)
	}
	return (
		<Box as="aside" w="64" mr="8">
			<SidebarNav />
		</Box>
	);
};
