import { Button, Center, VStack } from "@chakra-ui/react";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";

export const Signin = () => {
  return (
    <Center w="100%" p="20px">
      <VStack w="500px" spacing="10px">
        <EmailInput
          value={""}
          isValid={true}
          onChange={() => {}}
          errorMessage={""}
        />
        <PasswordInput
          value={""}
          isValid={true}
          onChange={() => {}}
          errorMessage={""}
        />
        <Button
          type="submit"
          data-testid="signin-button"
          onClick={() => {}}
          isDisabled={true}>
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
