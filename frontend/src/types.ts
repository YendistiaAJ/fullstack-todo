export interface Todo {
  title: string;
  description: string;
  due_date: string;
  done: boolean;
}

export interface TodosResponse {
  todos: Todo[];
}