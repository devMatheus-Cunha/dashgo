import React from "react";

// next
import Link from "next/link";

// chakra
import {
	Box,
	Divider,
	Flex,
	Heading,
	VStack,
	SimpleGrid,
	Button,
	HStack,
} from "@chakra-ui/react";

// components
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";

//--------------------------
// Export
//--------------------------
const CreateUser = () => {
	return (
		<Box>
			<Header />

			<Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
					<Heading size="lg" fontWeight="normal">
						Criar Usuário
					</Heading>

					<Divider my="6" borderColor="gray.700" />

					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="name" label="Nome completo" type="text" />
							<Input name="email" label="E-mail" type="email" />
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="password" label="Senha" type="password" />
							<Input
								name="password_confirmation"
								label="Confirmar senha"
								type="password"
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button colorScheme="whiteAlpha" as="a">
									Cancelar
								</Button>
							</Link>
							<Button colorScheme="pink">Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default CreateUser;
