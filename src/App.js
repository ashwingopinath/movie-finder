// import React from "react";
import { useState,useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import Moviecard from './Moviecard'
// 46f3b455
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=46f3b455'


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchterm, setSearchterm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setMovies(data.Search);
    } 

    useEffect(() => {
        searchMovies('spiderman');
    },[])
   return( 
    <div className="app">
        <h1> App </h1>
        <div className="search">
            <input placeholder ='Search for movies'
                value = {searchterm}
                onChange={(e)=>setSearchterm(e.target.value)}/>
            <img src={SearchIcon} 
                alt="search"
                onClick={()=>searchMovies(searchterm)} />
        </div>
        {
            movies.length > 0 ? (
            <div className="container">
                {
                    movies.map((movie)=>(<Moviecard movie ={movie}/>))
                }
            </div>) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )
        }

    </div>
    )
}

export default App;