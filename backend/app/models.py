from pydantic import BaseModel

class Todo(BaseModel):
    title: str
    due_date: str
    done: bool