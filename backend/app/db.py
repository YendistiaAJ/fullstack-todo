from models import Todo
from typing import List

memory_db = {
    "todos": []
}

def get_all_todos() -> List[Todo]:
    return memory_db["todos"]

def add_todo(todo: Todo) -> Todo:
    memory_db["todos"].append(todo)
    return todo

def update_todo_by_index(idx: int, todo: Todo) -> Todo:
    memory_db["todos"][idx] = todo
    return todo

def delete_todo_by_index(idx: int, todo: Todo) -> Todo:
    memory_db["todos"].pop(idx)
    return todo