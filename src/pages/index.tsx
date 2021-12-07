// chakra
import { Flex, Button, Stack } from "@chakra-ui/react";

// components
import { Input } from "../components/Form/Input";

//--------------------------
// Export
//--------------------------
export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input name="email" label="E-Mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
