import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

export const Signup = () => {
  return (
    <Center w="100%" p="20px">
      <VStack w="500px" spacing="10px">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" data-testid="email-input" />
          <FormErrorMessage>@ 포함</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" data-testid="password-input" />

          <FormErrorMessage>8자 이상</FormErrorMessage>
        </FormControl>
        <Button type="submit" data-testid="signup-button">
          Submit
        </Button>
      </VStack>
    </Center>
  );
};
