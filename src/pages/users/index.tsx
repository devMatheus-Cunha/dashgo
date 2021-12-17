/* eslint-disable no-nested-ternary */
import React from "react";

// react query
import { useQuery } from "react-query";

// next
import Link from "next/link";

// chakra
import {
	Box,
	Flex,
	Heading,
	Button,
	Icon,
	Table,
	Thead,
	Checkbox,
	Th,
	Tr,
	Tbody,
	Td,
	Text,
	Spinner,
	useBreakpointValue,
} from "@chakra-ui/react";

// icons
import { RiAddLine, RiPencilLine } from "react-icons/ri";

// components
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

//--------------------------
// Export
//--------------------------
const UserList = () => {
	const { data, isLoading, error } = useQuery("users", async () => {
		const resposne = await fetch("http://localhost:3000/api/users");
		const data = await resposne.json();
		return data;
	});

	console.log(data);

	// hooks
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	//--------------------------
	// Return
	//--------------------------
	return (
		<Box>
			<Header />

			<Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" bg="gray.800" borderRadius={8} p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Lista de Usuários
						</Heading>
						<Link href="/users/create" passHref>
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
								href="/users/create"
							>
								Criar novo
							</Button>
						</Link>
					</Flex>

					{isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : error ? (
						<Flex justify="center">
							<Text>Falha ao buscar os dados dos usuarios</Text>
						</Flex>
					) : (
						<>
							<Table colorScheme="whiteAlpha">
								<Thead>
									<Tr>
										<Th px={["4", "4", "6"]} color="gray.300" width="8">
											<Checkbox colorScheme="pink" />
										</Th>
										<Th>Usuário</Th>
										{isWideVersion && <Th>Data de cadastro</Th>}
										<Th w="8">Ações</Th>
									</Tr>
								</Thead>

								<Tbody>
									<Tr>
										<Td px={["4", "4", "6"]}>
											<Checkbox colorScheme="pink" />
										</Td>
										<Td>
											<Box>
												<Text fontweight="bold">Matheus Cunha</Text>
												<Text fontSize="sm" color="gray.300">
													devmatheusgr@gmail.com
												</Text>
											</Box>
										</Td>
										{isWideVersion && <Td>19 Março, 2021</Td>}
										<Td>
											<Button
												as="a"
												size="sm"
												fontSize="sm"
												colorScheme="purple"
												leftIcon={
													isWideVersion && <Icon as={RiPencilLine} fontSize="16" />
												}
											>
												{isWideVersion ? (
													"Editar "
												) : (
													<Icon as={RiPencilLine} fontSize="16" />
												)}
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td px={["4", "4", "6"]}>
											<Checkbox colorScheme="pink" />
										</Td>
										<Td>
											<Box>
												<Text fontweight="bold">Matheus Cunha</Text>
												<Text fontSize="sm" color="gray.300">
													devmatheusgr@gmail.com
												</Text>
											</Box>
										</Td>
										{isWideVersion && <Td>19 Março, 2021</Td>}
										<Td>
											<Button
												as="a"
												size="sm"
												fontSize="sm"
												colorScheme="purple"
												leftIcon={
													isWideVersion && <Icon as={RiPencilLine} fontSize="16" />
												}
											>
												{isWideVersion ? (
													"Editar "
												) : (
													<Icon as={RiPencilLine} fontSize="16" />
												)}
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td px={["4", "4", "6"]}>
											<Checkbox colorScheme="pink" />
										</Td>
										<Td>
											<Box>
												<Text fontweight="bold">Matheus Cunha</Text>
												<Text fontSize="sm" color="gray.300">
													devmatheusgr@gmail.com
												</Text>
											</Box>
										</Td>
										{isWideVersion && <Td>19 Março, 2021</Td>}
										<Td>
											<Button
												as="a"
												size="sm"
												fontSize="sm"
												colorScheme="purple"
												leftIcon={
													isWideVersion && <Icon as={RiPencilLine} fontSize="16" />
												}
											>
												{isWideVersion ? (
													"Editar "
												) : (
													<Icon as={RiPencilLine} fontSize="16" />
												)}
											</Button>
										</Td>
									</Tr>
								</Tbody>
							</Table>

							<Pagination />
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
};

export default UserList;
