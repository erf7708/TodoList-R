import { createSlice } from "@reduxjs/toolkit";


const TodoList = createSlice({
    name:"todo",
    initialState:{
        list:[]
    },
    reducers:{
        add : (state,action)=>{
                state.list.push(action.payload)
        }
    }
})

export const {add} = TodoList.actions

export default TodoList.reducer;