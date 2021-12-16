// react-hook-form
import { SubmitHandler, useForm } from "react-hook-form";

// yup
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

// chakra
import { Flex, Button, Stack } from "@chakra-ui/react";

// components
import { Input } from "../components/Form/Input";

// types
type SignInFormData = {
  email: string;
  password: string;
};

// schemas
const signInFormSchema = yup.object().shape({
	email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
	password: yup.string().required("Senha obrigatória"),
})

//--------------------------
// Export
//--------------------------
export default function SignIn() {
	// hooks
	const {
		register, handleSubmit, formState, formState: { errors },
	} = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	// functions
	const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
		await new Promise((resolve) =>
			setTimeout(() => {
				console.log(values);
			}, 2000));
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
						error={errors.email}
						{...register("email")}
					/>
					<Input
						name="password"
						label="Senha"
						type="password"
						error={errors.password}
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
