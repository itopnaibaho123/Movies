import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchAPI } from '../Movies/MoviesReducers'
import { useSelector } from "react-redux";

function Movies(){
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchAPI(''))
        
    }, [])

    const mov = useSelector((state) => state.movie.value)
    return ( 
        <div className="container">
            {mov.map((movie, index) =>{
                return(
                    <div className="item" key={index}>
                        <div className="imageFilm">
                            <img style={{height:'350px'}} src= {movie.Poster} alt='Avatar'></img>
                        </div>
                        <div className="titleMovies">
                            <p>{movie.Title}</p>
                        </div>                       
                    </div>
                )        
            })}
        </div>
           
        
        
    )
}
export default Movies;