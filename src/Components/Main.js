import React, { useEffect } from 'react';
import AddTodo from './AddTodo';
import { useSelector } from "react-redux";
import Todo from './Todo';
import axios from 'axios';
import { getData } from '../Store/Slice/TodoList';
import { useDispatch } from 'react-redux';
function Main(props) {

    const dispatch = useDispatch();

    const todos = useSelector(state=>state.TodoList.list)

    useEffect(()=>{
        getTodo()
    },[])

   const getTodo = async ()=>{
        const res = await axios.get('https://63b2a44f76028b55ae73e520.endapi.io/todos');
        dispatch(getData(res.data.data))
   }

    return (
        <>
         <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
          <div className="mb-4">
              <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
             <AddTodo/>
          </div>
          <div>
              {
                !todos.length ? <p style={{color:"red"}} >No Items...</p> :
                todos.map(todo =><Todo key={todo.id} item={todo}/>)
              }
              {/* <div className="flex justify-between mb-4 items-center">
                <p className="mr-auto line-through text-green-600">Submit Todo App Component to Tailwind Components</p>
                <div className="flex items-center">
                  <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">Not Done</button>
                  <button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
                </div>  
              </div> */}
          </div>
      </div>
  </div> 
        </>
    );
}

export default Main;