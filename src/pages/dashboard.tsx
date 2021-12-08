import React from "react";

// next
import dynamic from "next/dynamic";

// chakra
import {
	Flex, SimpleGrid, Box, Text,
} from "@chakra-ui/react";

// components
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

// utils
import { options, series } from "../utils/ApexCharts";

// apex //! for the import loading to happen only in the browser and not in the next node layer
const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
})

//--------------------------
// Export
//--------------------------

const Dashboard: React.FC = () => {
	return (
		<Flex direction="column" h="100vh">
			<Header />

			<Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<SimpleGrid flex="1" gap="4" minChildWidth="320px" aling="flex-start">
					<Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Inscritos da semana
						</Text>
						<Chart type="area" height={160} options={options} series={series} />
					</Box>
					<Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Taxa de abertura
						</Text>
						<Chart type="area" height={160} options={options} series={series} />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
