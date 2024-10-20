import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const SearchBar = () => {
    return (
        <div className="flexCenter search-bar">
        <HiLocationMarker color="var(--blue)" size={25}/>
        <input type="text"/>
        <button className="button">search</button>
       </div>
    );
}

export default SearchBar;
