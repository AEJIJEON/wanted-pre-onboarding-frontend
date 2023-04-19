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
import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export const Todo = () => {
  const { todos, createTodo, updateTodo } = useTodos();

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
            onClick={() => {
              if (newTodo.length > 0) createTodo(newTodo);
            }}>
            추가
          </Button>
        </HStack>
        <UnorderedList w="500px" spacing="10px">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
          ))}
        </UnorderedList>
      </VStack>
    </Center>
  );
};

const TodoItem = ({ todo, updateTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <ListItem>
      {isEditMode ? (
        <HStack>
          <HStack flex="1">
            <Checkbox />
            <Input data-testid="modify-input" />
          </HStack>
          <HStack>
            <Button data-testid="submit-button">제출</Button>
            <Button
              onClick={() => setIsEditMode(false)}
              data-testid="cancel-button">
              취소
            </Button>
          </HStack>
        </HStack>
      ) : (
        <HStack>
          <Checkbox
            flex="1"
            isChecked={todo.isCompleted}
            onChange={(e) => {
              updateTodo({
                ...todo,
                isCompleted: e.target.checked,
              });
            }}>
            {todo.todo}
          </Checkbox>
          <HStack>
            <Button
              onClick={() => setIsEditMode(true)}
              data-testid="modify-button">
              수정
            </Button>
            <Button data-testid="delete-button">삭제</Button>
          </HStack>
        </HStack>
      )}
    </ListItem>
  );
};
