import React, { useState } from 'react';
import './search.css'
import 'https://kit.fontawesome.com/adf8e2a534.js';

const Search = () => {
    const [inputText,setInputText] = useState("");

    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    const searchHandler = () =>{
        const url = new URL('https://www.google.com/search');
        url.searchParams.set('q',inputText)
        window.location.replace(url);
    }
    return (
        <div className='search'>
            <div className='category'>
                <li className='list'>All</li>
                <li className='list'>Image</li>
                <li className='list'>Videos</li>
                <li className='list'>News</li>
            </div>
            <div className='searchbox'>
                <input id='search-text' type='text' value={inputText} className='search--text' onChange={inputHandler}/>
                <button onClick={searchHandler} type='submit' className="search-icon fa fa-search" aria-hidden="true"></button>
            </div>
        </div>
    );
}

export default Search;
