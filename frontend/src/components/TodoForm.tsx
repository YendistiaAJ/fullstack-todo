import { useState, type FormEvent } from "react";

interface AddTodoProps {
  addTodo: (title: string, dueDate: string, done: boolean) => Promise<void>;
}

function TodoForm({ addTodo }: AddTodoProps) {
  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(title, dueDate, done);

    setTitle("");
    setDueDate("");
    setDone(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <input
        type="date"
        value={dueDate}
        name="due_date"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
