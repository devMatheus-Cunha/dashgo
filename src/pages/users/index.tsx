import React from "react";

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
	return (
		<Box>
			<Header />

			<Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Lista de Usuários
						</Heading>
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
					</Flex>

					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px="6" color="gray.300" width="8">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Usuário</Th>
								<Th>Data de cadastro</Th>
								<Th w="8">Ações</Th>
							</Tr>
						</Thead>

						<Tbody>
							<Tr>
								<Td px="6">
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
								<Td>19 Março, 2021</Td>
								<Td>
									<Button
										as="a"
										size="sm"
										fontSize="sm"
										colorScheme="purple"
										leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
									>
										Editar
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
};

export default UserList;
