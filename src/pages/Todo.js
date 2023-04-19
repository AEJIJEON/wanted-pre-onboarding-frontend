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
            onClick={() => {
              if (newTodo.length > 0) createTodo(newTodo);
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

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  const handleCheckBox = (checked) => {
    updateTodo({
      ...todo,
      isCompleted: checked,
    });
  };

  const handleSubmit = async () => {
    await updateTodo({
      ...todo,
      todo: newTodo,
    });
    setIsEditMode(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <ListItem>
      {isEditMode ? (
        <HStack>
          <HStack flex="1">
            <Checkbox
              isChecked={todo.isCompleted}
              onChange={(e) => handleCheckBox(e.target.checked)}
            />
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              data-testid="modify-input"
            />
          </HStack>
          <HStack>
            <Button onClick={handleSubmit} data-testid="submit-button">
              제출
            </Button>
            <Button
              onClick={() => {
                setIsEditMode(false);
                setNewTodo(todo.todo);
              }}
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
            onChange={(e) => handleCheckBox(e.target.checked)}>
            {todo.todo}
          </Checkbox>
          <HStack>
            <Button
              onClick={() => setIsEditMode(true)}
              data-testid="modify-button">
              수정
            </Button>
            <Button onClick={handleDelete} data-testid="delete-button">
              삭제
            </Button>
          </HStack>
        </HStack>
      )}
    </ListItem>
  );
};
