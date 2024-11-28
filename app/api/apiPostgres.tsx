import { PrismaClient } from '@prisma/client';
import { ITask } from '../../types/tasks';

const prisma = new PrismaClient();

export const getAllTodo = async (): Promise<ITask[]> => {
  const todos = await prisma.task.findMany();
  return todos.map(todo => ({
    id: todo.id,
    text: todo.text,
  }));
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const newTodo = await prisma.task.create({
    data: {
      id: todo.id, 
      text: todo.text,
    },
  });
  return {
    id: newTodo.id,
    text: newTodo.text,
  };
};

export const EditTodo = async (todo: ITask): Promise<ITask> => {
  const updatedTodo = await prisma.task.update({
    where: { id: todo.id },
    data: { text: todo.text },
  });
  return {
    id: updatedTodo.id,
    text: updatedTodo.text,
  };
};

export const DeleteTodo = async (id: string): Promise<void> => {
  await prisma.task.delete({
    where: { id },
  });
};