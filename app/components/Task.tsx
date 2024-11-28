"use client"; 

import { ITask } from "@/types/tasks";
import React, { FormEventHandler, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { DeleteTodo, EditTodo } from "@/app/api/api";

interface TaskProps {
    task: ITask
}

const Task: React.FC <TaskProps> = ( {task} ) =>{
  const router = useRouter();
  const[openModalEdit, setModalOpenEdit] = useState<boolean>(false);
  const[openModalDelete, setModalOpenDelete] = useState<boolean>(false);
  const[taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTask: FormEventHandler <HTMLFormElement> = async(e) => {
      e.preventDefault();
      await EditTodo({
          id: task.id,
          text: taskToEdit
      })
      setTaskToEdit("");
      setModalOpenEdit(false);
      router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await DeleteTodo(id);
    setModalOpenDelete(false);
    router.refresh();
  };
  
    return <tr key = {task.id}>
    <td className="w-full">{task.text}</td>
    <td className='flex gap-5'>
      <FaRegEdit onClick= {() => setModalOpenEdit(true)} className="text-blue-500" cursor= 'pointer' size = {15}/>
        <Modal modalOpen = {openModalEdit} setModalOpen = { setModalOpenEdit } > 
              <form onSubmit={ handleSubmitEditTask }>
                  <h3 className="font-bold">Edit task</h3>
                  <div className="modal-action">
                  <input 
                      value={taskToEdit}
                      onChange= {e => setTaskToEdit(e.target.value)}
                      type="text" 
                      placeholder="Type here" 
                      className="input input-bordered w-full" />
                  <button type="submit" className="btn">Submit</button>
                  </div>
              </form>
          </Modal>
      <FaRegTrashAlt onClick= {() => setModalOpenDelete(true)} className="text-red-500" cursor= 'pointer' size = {15}/>
        <Modal modalOpen = {openModalDelete} setModalOpen = { setModalOpenDelete } > 
          <h3 className="text-lg">Are you sure, you want to delete this task?</h3>
            <div className="modal-action">
              <button onClick = {() => handleDeleteTask(task.id)} className="btn ">
                Yes
              </button>
            </div>
        </Modal>
    </td>
  </tr> ;

}

export default Task;