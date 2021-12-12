import React from "react";

// chakra
import { Flex, useBreakpointValue } from "@chakra-ui/react";

// components
import { Profile } from "./Profile";
import { NotificationNav } from "./NotificationNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

//--------------------------
// Export
//--------------------------
export const Header = () => {
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
			<Logo />
			{isWideVersion && <SearchBox />}

			<NotificationNav />

			<Profile showProfileData={isWideVersion} />
		</Flex>
	);
};
