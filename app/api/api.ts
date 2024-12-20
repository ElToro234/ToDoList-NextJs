import { ITask } from "../../types/tasks"

const baseUrl ='http://localhost:3002'

export const getAllTodos = async (): Promise <ITask[]> => {
    const res = await fetch (`${baseUrl}/tasks`, {cache: 'no-store'});
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise <ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newToDo = await res.json();
    return newToDo
}

export const EditTodo = async (todo: ITask): Promise <ITask> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json();
    return updatedTodo
}

export const DeleteTodo = async (id: string): Promise <void> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
    })
}