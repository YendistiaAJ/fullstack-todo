import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import Todo, Todos
from db import get_all_todos, add_todo, update_todo_by_index, delete_todo_by_index

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/todos", response_model=Todos)
def get_todos():
    return Todos(todos=get_all_todos())

@app.post("/todos", response_model=Todo)
def create_todo(todo: Todo):
    return add_todo(todo)

@app.patch("/todos/{id}", response_model=Todo)
def update_todo(id: int, todo: Todo):
    return update_todo_by_index(id, todo)

@app.delete("/todos/{id}", response_model=Todo)
def delete_todo(id: int):
    return delete_todo_by_index(id)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)