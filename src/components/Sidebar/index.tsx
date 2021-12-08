import React from "react";

// chakra
import {
	Box, Stack, Text, Link, Icon,
} from "@chakra-ui/react";

// icons
import {
	RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine,
} from "react-icons/ri";

//--------------------------
// Export
//--------------------------
export const Sidebar: React.FC = () => {
	return (
		<Box as="aside" w="64" mr="8">
			<Stack spacing="12" aling="flex-start">
				<Box>
					<Text fontWeight="bold" color="gray.400" fontSize="small">
						GERAL
					</Text>
					<Stack spacing="4" mt="8" alinf="stretch">
						<Link display="flex" aling="center" href="/dashboard">
							<Icon as={RiDashboardLine} fontSize="20" />
							<Text ml="4" fontWeight="medium">Dashboard</Text>
						</Link>
						<Link display="flex" aling="center" href="/users">
							<Icon as={RiContactsLine} fontSize="20" />
							<Text ml="4" fontWeight="medium">Usuários</Text>
						</Link>
					</Stack>
				</Box>

				<Box>
					<Text fontWeight="bold" color="gray.400" fontSize="small">
						AUTOMAÇÃO
					</Text>
					<Stack spacing="4" mt="8" alinf="stretch">
						<Link display="flex" aling="center" href="/form">
							<Icon as={RiInputMethodLine} fontSize="20" />
							<Text ml="4" fontWeight="medium">Formulários</Text>
						</Link>
						<Link display="flex" aling="center" href="/automatic">
							<Icon as={RiGitMergeLine} fontSize="20" />
							<Text ml="4" fontWeight="medium">Automação</Text>
						</Link>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};
