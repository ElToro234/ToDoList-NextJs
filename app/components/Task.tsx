"use client"; 

import { ITask } from "@/types/tasks";
import React, { FormEventHandler, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";

interface TaskProps {
    task: ITask
}
const Task: React.FC <TaskProps> = ( {task} ) =>{
  const[openModalEdit, setModalOpenEdit] = useState<boolean>(false);
  const[openModalDelete, setModalOpenDelete] = useState<boolean>(false);
  const[taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTask: FormEventHandler <HTMLFormElement> = async(e) => {
      e.preventDefault();
      // await addTodo({
      //     id: uuidv4(),
      //     text: newTaskValue
      // })
      setTaskToEdit("");
      setModalOpenEdit(false);
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
      <FaRegTrashAlt className="text-red-500" cursor= 'pointer' size = {15}/>
    </td>
  </tr> ;

}

export default Task;