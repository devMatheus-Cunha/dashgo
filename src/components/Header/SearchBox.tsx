import React, { useRef } from "react";

// chakra
import { Flex, Input, Icon } from "@chakra-ui/react";

// icons
import { RiSearchLine } from "react-icons/ri";

//--------------------------
// Export
//--------------------------
export const SearchBox = () => {
	const searchInput = useRef<HTMLInputElement>(null)
	console.log(searchInput.current?.value);
	return (
		<Flex
			as="label"
			flex="1"
			py="4"
			px="8"
			ml="6"
			maxWidth={400}
			alignSelf="center"
			color="gray.200"
			position="relative"
			bg="gray.800"
			borderRadius="full"
		>
			<Input
				color="gray.50"
				variant="unstyled"
				px="4"
				mr="4"
				placeholder="Buscar na plataforma"
				_placeholder={{ color: "gray.400" }}
				ref={searchInput}
			/>
			<Icon as={RiSearchLine} fontSize="20" />
		</Flex>

	);
}
