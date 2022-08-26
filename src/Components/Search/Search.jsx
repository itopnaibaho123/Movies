import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAPI } from '../Movies/MoviesReducers'
function Search(){

    const [searching, setSearching] = useState('')
    const dispatch = useDispatch()

    console.log(searching)
    return (
        <div>
            <input placeholder="Search" type ="text" 
            id = "input" onChange={(event) => {
                setSearching(event.target.value)
            }} value={searching}></input>
            <button onClick={() =>{dispatch(fetchAPI(searching))
            }}>
                Search
            </button>
        </div>
        
    )
    
}

export default Search;