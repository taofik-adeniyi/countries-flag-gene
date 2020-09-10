import React from 'react'
import './Search.scss'
import Filter from '../Filter/Filter'

function Search(props) {
    return (
        <div className="search-wrapper">
            <div className="search">
                <ion-icon name="search-sharp"></ion-icon>
                <input type="search" placeholder="Search for a Country" />
            </div>
            <Filter />
        </div>
    )
}

export default Search
