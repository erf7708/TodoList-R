import { createSlice } from "@reduxjs/toolkit";


const TodoList = createSlice({
    name:"todo",
    initialState:{
        list:[]
    },
    reducers:{

        getData : (state,action) =>{
            state.list=action.payload
        },

        add : (state,action)=>{
                state.list.push(action.payload)
        },

        deleteTodo:(state,action)=>{
            state.list=state.list.filter(item=> item.id != action.payload)
        },

        editTodo:(state,action)=>{
            state.list=state.list.map(item=>{
                return item.id ==action.payload.id
                ?
                
                {
                    ...item,
                    done:!item.done
                }
                :
                item
            })
        }
    }
})

export const {add,deleteTodo,editTodo,getData} = TodoList.actions

export default TodoList.reducer;