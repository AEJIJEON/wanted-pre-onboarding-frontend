import {
  Button,
  Center,
  HStack,
  Input,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { TodoItem } from "../components/TodoItem";
import { useTodos } from "../hooks/useTodos";

export const Todo = () => {
  const { todos, createTodo, updateTodo, deleteTodo } = useTodos();

  const [newTodo, setNewTodo] = useState("");

  return (
    <Center w="100%" p="20px">
      <VStack spacing="30px">
        <HStack w="full">
          <Input
            data-testid="new-todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            data-testid="new-todo-add-button"
            onClick={async () => {
              if (newTodo.length > 0) {
                await createTodo(newTodo);
                setNewTodo("");
              }
            }}>
            추가
          </Button>
        </HStack>
        <UnorderedList w="500px" spacing="10px">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </UnorderedList>
      </VStack>
    </Center>
  );
};
