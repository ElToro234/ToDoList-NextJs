import { ITask } from "@/types/tasks";
import React, { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
    task: ITask
}
const Task: React.FC <TaskProps> = ( {task} ) =>{
  const[openModalEdit, setModalOpenEdit] = useState(false);
  const[openModalDelete, setModalOpenDelete] = useState(false);

    return <tr key = {task.id}>
    <td className="w-full">{task.text}</td>
    <td className='flex gap-5'>
      <FaRegEdit className="text-blue-500" cursor= 'pointer' size = {15}/>
        <Modal modalOpen = {modalOpen} setModalOpen = { setModalOpen } > 
              <form onSubmit={ handleSubmitNewTask }>
                  <h3 className="font-bold">Add new task</h3>
                  <div className="modal-action">
                  <input 
                      value={newTaskValue}
                      onChange= {e => setNewTaskValue(e.target.value)}
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