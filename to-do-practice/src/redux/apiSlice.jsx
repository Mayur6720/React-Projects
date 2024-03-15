import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk( "fetchTodos" , async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
} )


const ApiSlice = createSlice({
    name : "todo",
    initialState : {
        data : null,
        isLoading : false,
        isError : false 
    },
    extraReducers : (builder) => {
        builder.addCase( fetchTodo.pending, (state, action)=> {
            state.isLoading = true;
        });
        builder.addCase( fetchTodo.fulfilled , (state, action) => {
            state.isLoading = false;
            state.data = action.payload;

        });
        builder.addCase ( fetchTodo.rejected, ( state, action )=> {
            console.log("error", action.payload)
            state.isError = true;
        })
    }
})

export default ApiSlice.reducer