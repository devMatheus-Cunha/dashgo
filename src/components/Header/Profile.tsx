import React from "react";

// chakra
import {
	Flex, Text, Box, Avatar,
} from "@chakra-ui/react";

//--------------------------
// Export
//--------------------------
export const Profile = () => {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Matheus Cunha</Text>
				<Text color="gray.300" fontSize="small">
					devmatheusgr@gmail.com
				</Text>
			</Box>

			<Avatar
				size="md"
				name="Matheus Cunha"
				src="https://github.com/devMatheus-Cunha.png"
			/>
		</Flex>
	);
}
