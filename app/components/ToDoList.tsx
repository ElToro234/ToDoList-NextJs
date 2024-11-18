import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface ToDoListProp {
  tasks: ITask[]
} 

const ToDoList: React.FC<ToDoListProp> = ({ tasks }) =>{
    return <div>
        <div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr>
        <th>Tasks To Do</th>
        <th>Actions</th>
      </tr>
    </thead>
      <tbody>
        {tasks.map((task) => 
          <Task key={ task.id } task = { task }/> )}
      </tbody>
    </table>
  </div>
</div>
}

export default ToDoList;