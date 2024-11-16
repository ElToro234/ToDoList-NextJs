
import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className='max-w-4xl mx-auto'>
      <div className='text-center my-5 flex flex-col'>
        <h1 className='my-5 text-3xl underline font-bold'>My To Do List</h1>
        <AddTask/>
      </div>

      <ToDoList/>
      
    </main>
  );
}
