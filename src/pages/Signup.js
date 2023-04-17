import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = email.includes("@");
  const isPasswordValid = password.length >= 8;

  return (
    <Center w="100%" p="20px">
      <VStack w="500px" spacing="10px">
        <FormControl isRequired isInvalid={!isEmailValid}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />
          {isEmailValid ? null : <FormErrorMessage>@ 포함</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={!isPasswordValid}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />
          {isPasswordValid ? null : (
            <FormErrorMessage>8자 이상</FormErrorMessage>
          )}
        </FormControl>
        <Button
          type="submit"
          data-testid="signup-button"
          isDisabled={!isEmailValid || !isPasswordValid}>
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
