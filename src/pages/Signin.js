import { Button, Center, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../apis/api";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { useFormValidation } from "../hooks/useFormValidation";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    isFormValid,
    email: emailValidation,
    password: passwordValidation,
  } = useFormValidation({ email, password });

  const submit = async () => {
    try {
      const { access_token } = await api.postSignin({ email, password });
      localStorage.setItem("access_token", access_token);
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
        <PasswordInput
          value={password}
          isValid={passwordValidation.isValid}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={passwordValidation.errorMessage}
        />
        <Button
          type="submit"
          data-testid="signin-button"
          onClick={submit}
          isDisabled={!isFormValid}>
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
