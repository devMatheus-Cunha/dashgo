import React from "react";

// chakra
import { Button } from "@chakra-ui/react";

// interface
interface IPaginationItemProps {
  numberPage: number;
  isCurrent?: boolean;
}

//--------------------------
// Export
//--------------------------
export const PaginationItem = ({
	isCurrent = false,
	numberPage,
}: IPaginationItemProps) => {
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
				{numberPage}
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
			{numberPage}
		</Button>
	);
};
