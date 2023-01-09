import { configureStore } from "@reduxjs/toolkit";
import TodoList from "./Slice/TodoList";
const Store = configureStore({
    reducer:{TodoList}
})

export default Store;