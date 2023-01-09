import React from 'react';
import { deleteTodo } from '../Store/Slice/TodoList';
import { useDispatch } from 'react-redux';
import { editTodo } from '../Store/Slice/TodoList';
function Todo({item}) {
    const dispatch =useDispatch();
    const EditHandler=()=>{
        dispatch(editTodo({id:item.id}))
    }
    return (
        <>
             <div className="flex mb-4 items-center">
                  <p className={`mr-auto  ${!item.done ? "text-gray-700" : "line-through text-green-600"}`}>{item.text}</p>

                  {
                    item.done ?          
                    <button onClick={EditHandler} className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">Not Done</button>
                    :
                    <button onClick={EditHandler} className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">Done</button>
                    }

                  <button onClick={()=>dispatch(deleteTodo(item.id))} className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
              </div>
        </>
    );
}

export default Todo;