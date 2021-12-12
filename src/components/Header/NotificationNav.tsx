import React from "react";

// chakra
import { Flex, HStack, Icon } from "@chakra-ui/react";

// icons
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

//--------------------------
// Export
//--------------------------
export const NotificationNav = () => {
	return (
		<Flex align="center" ml="auto">
			<HStack
				spacing={["6", "8"]}
				mx={["6", "8"]}
				pr={["6", "8"]}
				py="1"
				color="gray.300"
				borderRadiusWidht={1}
				borderColor="gray.700"
			>
				<Icon as={RiNotificationLine} fontSize="20" />
				<Icon as={RiUserAddLine} fontSize="20" />
			</HStack>
		</Flex>
	);
}
