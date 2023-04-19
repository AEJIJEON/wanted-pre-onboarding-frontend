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
import { useNavigate } from "react-router-dom";
import { api } from "../apis/api";
import { EmailInput } from "../components/EmailInput";
import { useFormValidation } from "../hooks/useFormValidation";

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    isFormValid,
    email: emailValidation,
    password: passwordValidation,
  } = useFormValidation({ email, password });

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
        <EmailInput
          value={email}
          isValid={emailValidation.isValid}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={emailValidation.errorMessage}
        />
        <FormControl isRequired isInvalid={!isFormValid}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-input"
          />
          {passwordValidation.isValid ? null : (
            <FormErrorMessage>
              {passwordValidation.errorMessage}
            </FormErrorMessage>
          )}
        </FormControl>
        <Button
          type="submit"
          data-testid="signup-button"
          onClick={submit}
          isDisabled={!isFormValid}>
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
