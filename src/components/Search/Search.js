import React from 'react'
import './Search.scss'
import Filter from '../Filter/Filter'

function Search(props) {
    const handleSearchSubmit = () => {
        console.log('hello world')
    }
    return (
        <div className="search-wrapper">
            <div className="search">
                <form onSubmit={handleSearchSubmit}>
                    <ion-icon name="search-sharp"></ion-icon>
                    <input type="search" placeholder="Search for a Country" />
                </form>
            </div>
            <Filter />
        </div>
    )
}

export default Search
