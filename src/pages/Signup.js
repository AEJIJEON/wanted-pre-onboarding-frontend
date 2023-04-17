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

  return (
    <Center w="100%" p="20px">
      <VStack w="500px" spacing="10px">
        <FormControl isRequired isInvalid={!email.includes("@")}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
          />
          {!email.includes("@") ? (
            <FormErrorMessage>@ 포함</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isRequired isInvalid={password.length < 8}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />
          {password.length < 8 ? (
            <FormErrorMessage>8자 이상</FormErrorMessage>
          ) : null}
        </FormControl>
        <Button
          type="submit"
          data-testid="signup-button"
          isDisabled={!email.includes("@") || password.length < 8}>
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
