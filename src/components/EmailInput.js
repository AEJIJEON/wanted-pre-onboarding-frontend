import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const EmailInput = ({ value, isValid, onChange, errorMessage }) => {
  return (
    <FormControl isRequired isInvalid={!isValid}>
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        value={value}
        onChange={onChange}
        data-testid="email-input"
      />
      {isValid ? null : <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
