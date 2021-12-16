import React, { forwardRef, ForwardRefRenderFunction } from "react";

// react-hook-form
import { FieldError } from "react-hook-form";

// chakra
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";

// interfaces
interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

//--------------------------
// Export
//--------------------------
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
	{
		label, name, error = null, ...rest
	},
	ref,
) => {
	return (
		<FormControl isInvalid={!!error}>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<ChakraInput
				name={name}
				id={name}
				focusBorderColor="pink.500"
				bgColor="gray.900"
				variant="filled"
				_hover={{
					bgColor: "gray.900",
				}}
				size="lg"
				ref={ref}
				{...rest}
			/>
			 { !!error && (
				<FormErrorMessage>
					<span role="alert">
						{ error.message }
					</span>
				</FormErrorMessage>
			)}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
