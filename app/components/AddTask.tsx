"use client"; 

import React, { FormEventHandler, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Modal from "./Modal";
import { addTodo } from "@/api";


const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');
    
    const handleSubmitNewTask: FormEventHandler <HTMLFormElement> = async(e) => {
        e.preventDefault();
        await addTodo({
            id: "3",
            text: newTaskValue
        })
        setNewTaskValue("");
        setModalOpen(false);
    }

    return <div>
        <button onClick = {() => setModalOpen(true)} className='btn btn-primary w-full'>Add Task
        <IoMdAddCircleOutline className='ml-4'/>
        </button>
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
    </div>;
};

export default AddTask;