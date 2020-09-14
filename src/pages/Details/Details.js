import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Details.scss'

function Details() {
    return (
        <div>
            <div>
                <NavBar />
                <button><ion-icon name="arrow-back-outline"></ion-icon>Back</button>
            </div>
            <div className="lg-img-cont">
                <img className="large-img" src={require("../../assets/images/canada-stock.jpg")} />
                <main>
                    <div className="one">
                        <h2>Belgium</h2>
                        <ul>
                            <li>Native Name: Bekjie</li>
                            <li>Population : 11,319,511</li>
                            <li>Region: Europe</li>
                            <li>Sub Region: Western Europe</li>
                            <li>Capital: Brusells</li>
                        </ul>
                    </div>
                    <div className="two">
                        <ul>
                            <li>Top Level Domain: Bekjie</li>
                            <li>Currencies: Euro</li>
                            <li>Languages: Dutch, French, German</li>
                        </ul>
                    </div>
                    <div className="three">
                        <h4>Border Countries:</h4>
                        <ul>
                        <li>France</li>
                        <li>Germany</li>
                        <li>Netherlands</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Details