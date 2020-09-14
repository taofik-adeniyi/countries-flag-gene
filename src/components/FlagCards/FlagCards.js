import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './FlagCards.scss'
import { useHistory } from 'react-router-dom'

function FlagCards() {
    const history = useHistory()
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
            console.log(res)
            setCountries(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <React.Fragment>
            {countries.map(country =>
                <div onClick={() => history.push(`/details/${country.name}`)} className="flag-container" key={country.latlng}>
                <img className="flag-image" src={country.flag} alt="" />
                <div className="holder">
                    <div className="country-name">{country.name}</div>
                    <div className="list-info">
                        <div className="population"><small>Population : {country.population}</small></div>
                        <div className="region"><small>Region : {country.region} </small></div>
                        <div className="capital"><small>Capital : {country.capital}</small></div>
                    </div>
                </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default FlagCards
