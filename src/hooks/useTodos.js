import { useEffect, useState } from "react";
import { apiClient } from "../apis/apiClient";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const todosData = await apiClient.getTodos();
      setTodos(todosData);
    } catch (e) {
      console.error(e);
    }
  };

  const refetchTodos = async () => {
    try {
      await fetchTodos();
    } catch (e) {
      console.error(e);
    }
  };

  const createTodo = async (todo) => {
    try {
      await apiClient.createTodo({ todo });
      await refetchTodos();
    } catch (e) {
      console.error(e);
    }
  };

  const updateTodo = async (todo) => {
    try {
      await apiClient.updateTodo(todo.id, todo);
      await refetchTodos();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    createTodo,
    updateTodo,
  };
};
