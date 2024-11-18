"use client"; 

import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Modal from "./Modal";


const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return <div>
        <button onClick = {() => setModalOpen(true)} className='btn btn-primary w-full'>Add Task
        <IoMdAddCircleOutline className='ml-4'/>
        </button>
        <Modal modalOpen = {modalOpen} setModalOpen = { setModalOpen } />
    </div>;
};

export default AddTask;