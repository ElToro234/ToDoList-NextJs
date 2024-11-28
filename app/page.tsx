
import { getAllTodos } from "@/app/api/api";
import { getAllTodo } from "@/app/api/apiPostgres";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";


export default async function Home() {
  const tasks = await getAllTodos();
  const taskData = await getAllTodo();
  console.log(tasks);
  console.log(taskData);
  return (
    <main className='max-w-4xl mx-auto'>
      <div className='text-center my-5 flex flex-col'>
        <h1 className='my-5 text-3xl font-bold'>My To Do List</h1>
        <AddTask/>
      </div>

      <ToDoList tasks ={ tasks }/>
      <ToDoList tasks ={ taskData }/>
      
    </main>
  );
}
