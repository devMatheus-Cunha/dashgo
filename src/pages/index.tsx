import { SubmitHandler, useForm } from "react-hook-form";

// chakra
import { Flex, Button, Stack } from "@chakra-ui/react";

// components
import { Input } from "../components/Form/Input";

// types
type SignInFormData = {
  email: string;
  password: string;
};

//--------------------------
// Export
//--------------------------
export default function Home() {
	// hooks
	const { register, handleSubmit, formState } = useForm();

	// functions
	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		await new Promise((resolve) => setTimeout(() => {
			console.log(values);
		}, 2000))
	};

	//--------------------------
	// Return
	//--------------------------
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
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input
						name="email"
						label="E-Mail"
						type="email"
						{...register("email")}
					/>
					<Input
						name="password"
						label="Senha"
						type="password"
						{...register("password")}
					/>
				</Stack>

				<Button
					type="submit"
					mt="6"
					colorScheme="pink"
					isLoading={formState.isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
