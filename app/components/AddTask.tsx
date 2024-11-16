import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddTask = () => {
    return <div>
        <button className='btn btn-primary w-full'>Add Task
        <IoMdAddCircleOutline className='ml-4'/>
        </button>
    </div>;
};

export default AddTask;