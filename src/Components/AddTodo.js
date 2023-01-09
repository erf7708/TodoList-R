import React, { useState } from 'react';
import { add } from '../Store/Slice/TodoList';

import { useDispatch } from 'react-redux';
function AddTodo(props) {
    const dispatch = useDispatch();
    const[text,setText] =useState("");
    const SubmitHandler =() =>{
        if(text.length >0) {
            dispatch(add({
                id:Date.now(),
                text,
                done:false
            }))
        }

        setText("")
    }
    return (
        <>
            <div className="flex mt-4">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" value={text} onChange={(e)=>setText(e.target.value)} />
                  <button onClick={SubmitHandler} className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500">Add</button>
              </div> 
        </>
    );
}

export default AddTodo;