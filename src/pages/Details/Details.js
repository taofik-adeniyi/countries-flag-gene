import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Details.scss'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

function Details(match) {
    
    const history = useHistory()

    const {countryname} = useParams()
    
    const handlePrev = () => {
        history.goBack()
    }

    const [byName, setByName] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${countryname}`)
        .then(res => {
            setByName(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <div>
                <NavBar />
                <button onClick={handlePrev}>
                    <ion-icon name="arrow-back-outline"></ion-icon>Back
                </button>
            </div>
            {
                byName.map((listName)=>
                <div className="lg-img-cont" key={listName.latlng}>
                <img className="large-img" src={listName.flag} alt="" />
                <main> 
                    <div className="one">
                        <h2>{listName.name}</h2>
                        <ul>
                            <li>Native Name: {listName.nativeName}</li>
                            <li>Population : {listName.population}</li>
                            <li>Region: {listName.region}</li>
                            <li>Sub Region: {listName.subregion}</li>
                            <li>Capital: {listName.capital}</li>
                        </ul>
                    </div>
                    <div className="two">
                        <ul>
                            <li>Top Level Domain: {listName.topLevelDomain}</li>
                            <li>
                                Currencies: {listName.currencies.map((curr)=>
                                " "+curr.code
                            )}
                            </li>
                            <li>Languages: 
                                {listName.languages.map((language)=>
                                    " "+language.name
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="three">
                        <h4>Border Countries:</h4>
                        <ul>
                        {listName.borders.map((borderCountry)=>
                            <li>{borderCountry}</li>
                        )}
                        </ul>
                    </div>
                </main>
            </div>
            )
            }
            
        </div>
    )
}

export default Details