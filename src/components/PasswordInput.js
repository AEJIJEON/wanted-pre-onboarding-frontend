import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const PasswordInput = ({ value, isValid, onChange, errorMessage }) => {
  return (
    <FormControl isRequired isInvalid={!isValid}>
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        value={value}
        onChange={onChange}
        data-testid="password-input"
      />
      {isValid ? null : <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
