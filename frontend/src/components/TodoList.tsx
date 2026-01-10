import { useEffect, useState } from "react";
import api from "../api";
import type { AxiosResponse } from "axios";
import type { Todo } from "../types";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const { data }: AxiosResponse<{ todos: Todo[] }> = await api.get(
        "/todos"
      );
      setTodos(data.todos);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  const addTodo = async (title: string, due_date: string, done: boolean) => {
    try {
      await api.post("/todos", { title, due_date, done });
    } catch (error) {
      console.log("Error adding todos", error);
    }
  };

  const toggleTodoDone = async (index: number) => {
    const todo = todos[index];
    const updatedTodo = { ...todo, done: !todo.done };

    try {
      await api.patch(`/todos/${index}`, updatedTodo);
      await fetchTodos();
    } catch (error) {
      console.log("Error updating todo", error);
    }
  };

  const deleteTodo = async (index: number) => {
    try {
      await api.delete(`/todos/${index}`);
      await fetchTodos();
    } catch (error) {
      console.log("Error deleting todo", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo: Todo, index: number) => (
          <div key={index} className="todo-item">
            <input
              type="checkbox"
              id={`todo-${index}`}
              className="custom-checkbox"
              checked={todo.done}
              onChange={() => toggleTodoDone(index)}
            />
            <label htmlFor={`todo-${index}`} className="custom-label">
              <div className="todo-description">
                {todo.title}
                {todo.due_date}
              </div>
            </label>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
