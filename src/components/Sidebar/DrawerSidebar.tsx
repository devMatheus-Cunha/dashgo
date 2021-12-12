import React, { ReactNode } from "react";

// chakra
import {
	Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,
} from "@chakra-ui/react";

// interface
interface IDrawerSideBarProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

//--------------------------
// Export
//--------------------------
export const DrawerSidebar = ({ isOpen, onClose, children }: IDrawerSideBarProps) => {
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent bg="gray.800" p="4">
					<DrawerCloseButton mt="6" />
					<DrawerHeader>Naveegação</DrawerHeader>
					<DrawerBody>
						{children}
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};
