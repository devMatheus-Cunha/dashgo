import React from "react";

// chakra
import { Button } from "@chakra-ui/react";

//--------------------------
// Export
//--------------------------
export const PaginationItem: React.FC<any> = ({ isCurrent = false, number }: any) => {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				width="4"
				colorScheme="pink"
				disabled
				_disabled={{ colorbgColor: "pink.500", cursor: "default" }}
			>
				{number}
			</Button>
		);
	}
	return (
		<Button
			size="sm"
			fontSize="xs"
			width="4"
			bgColor="gray.700"
			_hover={{ bg: "gray.500" }}
		>
			{number}
		</Button>
	);
};
