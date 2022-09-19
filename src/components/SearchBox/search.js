import React, { useState } from 'react';
import './search.css'
import 'https://kit.fontawesome.com/adf8e2a534.js';

const Search = () => {
    const [inputText,setInputText] = useState("");
    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    const searchboxHandler = () =>{
        let name = document.getElementById('search-text').value;
        // console.log(name)
    }
    return (
        <div className='search'>
            <div className='category'>
                <li className='list'>All</li>
                <li className='list'>Image</li>
                <li className='list'>Videos</li>
                <li className='list'>News</li>
            </div>
            <form action='https://www.google.com/search?q=' method='get' target='__blank' className='searchbox'>
                <input name='q' id='search-text' type='text' value={inputText} className='search--text' onChange={inputHandler}/>
                <button className="search-icon fa fa-search" aria-hidden="true"></button>
            </form>
        </div>
    );
}

export default Search;
