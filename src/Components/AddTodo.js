import React, { useState } from 'react';
import { add } from '../Store/Slice/TodoList';

import { useDispatch } from 'react-redux';
import axios from 'axios';
function AddTodo(props) {
    const dispatch = useDispatch();
    const[text,setText] =useState("");
    const SubmitHandler =async() =>{
        if(text.length >0) {

            const res = await axios.post('https://63b2a44f76028b55ae73e520.endapi.io/todos',{
                text,
                done:false
            })

            dispatch(add(res.data.data))
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