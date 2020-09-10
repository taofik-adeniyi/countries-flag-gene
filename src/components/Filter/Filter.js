import React from 'react'
import './Filter.scss'

function Filter() {
    return (
        <div>
            <select>
                <option>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}

export default Filter
