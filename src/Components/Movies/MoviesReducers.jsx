
import { createSlice } from '@reduxjs/toolkit'

import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchAPI = createAsyncThunk('users/fetchUsers', async(name) => {
    let data = []
    if(name === "") {
        const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e79f8fca&s=star wars')
        const resjson = await res.json()
        data = resjson.Search
    } else {
        const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e79f8fca&s=' + name)
        const resjson = await res.json()
        data = resjson.Search
    }return data;
})

export const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        value: []
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchAPI.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export const { search } = movieSlice.actions
export default movieSlice.reducer

