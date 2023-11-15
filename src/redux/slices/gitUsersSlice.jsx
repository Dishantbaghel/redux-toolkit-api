import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getAllData = createAsyncThunk('gitUsers', async () =>{
    const response = await fetch('https://api.github.com/users');
    return response.json();
})

export const gitUser = createSlice({
    name : "gitUser",
    initialState : {
        users : [],
        loading : false,
        error : null,
    },
    extraReducers : {
        [getAllData.pending] : (state) =>{
            state.loading = true;
        },
        [getAllData.fulfilled] : (state,action) =>{
            state.loading = false;
            state.users = action.payload;
        },
        [getAllData.rejected] : (state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },
    }
})
export default gitUser.reducer;