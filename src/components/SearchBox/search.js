import React from 'react';
import './search.css'
import 'https://kit.fontawesome.com/adf8e2a534.js';

const Search = () => {
    const searchboxHandler = () =>{
        let name = document.getElementById('search-text').value;
        return `https://www.google.com/?q=${name}`
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
                <input id='search-text' type='text' className='search--text'/>
                <i className="search-icon fa fa-search" aria-hidden="true" onClick={searchboxHandler}></i>
           
            </div>
        </div>
    );
}

export default Search;
