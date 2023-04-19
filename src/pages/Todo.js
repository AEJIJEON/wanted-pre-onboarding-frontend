import {
  Button,
  Center,
  Checkbox,
  HStack,
  Input,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { apiClient } from "../apis/apiClient";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const todosData = await apiClient.getTodos();
      setTodos(todosData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Center w="100%" p="20px">
      <VStack spacing="30px">
        <HStack w="full">
          <Input data-testid="new-todo-input" />
          <Button data-testid="new-todo-add-button">추가</Button>
        </HStack>
        <UnorderedList w="500px" spacing="10px">
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <HStack>
                <Checkbox flex="1" isChecked={todo.isCompleted}>
                  {todo.todo}
                </Checkbox>
                <HStack>
                  <Button data-testid="modify-button">수정</Button>
                  <Button data-testid="delete-button">삭제</Button>
                </HStack>
              </HStack>
            </ListItem>
          ))}
          <ListItem>
            <HStack>
              <HStack flex="1">
                <Checkbox />
                <Input data-testid="modify-input" />
              </HStack>
              <HStack>
                <Button data-testid="submit-button">제출</Button>
                <Button data-testid="cancel-button">취소</Button>
              </HStack>
            </HStack>
          </ListItem>
        </UnorderedList>
      </VStack>
    </Center>
  );
};
