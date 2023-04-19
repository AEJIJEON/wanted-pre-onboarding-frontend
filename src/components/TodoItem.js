import { Button, Checkbox, HStack, Input, ListItem } from "@chakra-ui/react";
import { useState } from "react";

export const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  const handleCheckBox = (checked) => {
    updateTodo(todo.id, {
      ...todo,
      isCompleted: checked,
    });
  };

  const handleSubmit = async () => {
    await updateTodo(todo.id, {
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
