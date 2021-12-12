import React from "react";

// chakra
import {
	Flex, Icon, IconButton, useBreakpointValue,
} from "@chakra-ui/react";

// icons
import { RiMenuLine } from "react-icons/ri";

// contexts
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

// components
import { Profile } from "./Profile";
import { NotificationNav } from "./NotificationNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

//--------------------------
// Export
//--------------------------
export const Header = () => {
	// hooks
	const { onOpen } = useSidebarDrawer();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	//--------------------------
	// Return
	//--------------------------
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1400}
			h="20"
			marginX="auto"
			marginTop="4"
			align="center"
			px="6"
		>
			{!isWideVersion && (
				<IconButton
					icon={<Icon as={RiMenuLine} />}
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					aria-label="Open Navigation"
					mr="2"
				/>
			)}
			<Logo />
			{isWideVersion && <SearchBox />}

			<NotificationNav />

			<Profile showProfileData={isWideVersion} />
		</Flex>
	);
};
