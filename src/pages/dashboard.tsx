import React from "react";
// chakra
import { Flex } from "@chakra-ui/react";

// components
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

//--------------------------
// Export
//--------------------------
const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
