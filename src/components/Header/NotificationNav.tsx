import React from "react";

// chakra
import { Flex, HStack, Icon } from "@chakra-ui/react";

// icons
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export const NotificationNav: React.FC = () => {
	return (
		<Flex align="center" ml="auto">
			<HStack
				spacing="8"
				mx="8"
				pr="8"
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
