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
import { api } from "../apis/api";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = email.includes("@");
  const isPasswordValid = password.length >= 8;

  const submit = async () => {
    try {
      const res = await api.postSignup({ email, password });
      navigate("/signin", { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

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
          onClick={submit}
          isDisabled={!isEmailValid || !isPasswordValid}>
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
