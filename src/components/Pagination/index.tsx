import React from "react";

// chakra
import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

// interface
interface PaginationProps {
	totalCountOfRegisters: number;
	registersPerPage?: number;
	currentPage?: number;
	onPageChange: (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
	return [...new Array(to - from)]
		.map((_, index) => {
			return from + index + 1;
		})
		.filter((page) => page > 0);
}

//--------------------------
// Export
//--------------------------
export const Pagination = ({
	totalCountOfRegisters,
	registersPerPage = 5,
	currentPage = 1,
	onPageChange,
}: PaginationProps) => {
	const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

	const previousPages = currentPage > 1
		? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
		: [];

	const nextPages = currentPage < lastPage
		? generatePagesArray(
			currentPage,
			Math.min(currentPage + siblingsCount, lastPage),
		)
		: [];
	//--------------------------
	// Return
	//--------------------------
	return (
		<Stack
			direction={["column", "row"]}
			mt="8"
			justifyContent="space-between"
			alignItems="center"
			spacing="6"
		>
			<Box>
				<strong>0</strong>
				{" "}
				-
				{" "}
				<strong>5</strong>
				{" "}
				de
				{" "}
				<strong>{totalCountOfRegisters}</strong>
			</Box>
			<Stack direction="row" spacing="2">
				{currentPage > 1 + siblingsCount && (
					<>
						<PaginationItem numberPage={1} onPageChange={onPageChange} />
						{currentPage > 2 + siblingsCount && (
							<Text color="gray.300" width="8" textAlign="center">
								...
							</Text>
						)}
					</>
				)}

				{previousPages.length > 0
					&& previousPages.map((page) => {
						return (
							<PaginationItem
								key={page}
								numberPage={page}
								onPageChange={onPageChange}
							/>
						);
					})}

				<PaginationItem
					numberPage={currentPage}
					isCurrent
					onPageChange={onPageChange}
				/>

				{nextPages.length > 0
					&& nextPages.map((page) => {
						return (
							<PaginationItem
								key={page}
								numberPage={page}
								onPageChange={onPageChange}
							/>
						);
					})}

				{currentPage + siblingsCount < lastPage && ( 
					<>
						{currentPage + 1 + siblingsCount < lastPage && (
							<Text color="gray.300" width="8" textAlign="center">
								...
							</Text>
						)}
						<PaginationItem numberPage={lastPage} onPageChange={onPageChange} />
					</>
				)}
			</Stack>
		</Stack>
	);
};
