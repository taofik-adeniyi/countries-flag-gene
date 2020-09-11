import React from 'react'
import './FlagCards.scss'
import { useHistory } from 'react-router-dom'

function FlagCards() {
    
    const history = useHistory()

    return (
        <React.Fragment>
            <div onClick={() => {
                history.push('/details')
            }} className="flag-container">
                <img className="flag-image" src={require("../../assets/images/canada-stock.jpg")} alt="" />
                <div className="holder">
                    <div className="country-name">Germany</div>
                    <div className="list-info">
                        <div className="population"><small>Population : 81,770,900</small></div>
                        <div className="region"><small>Region : Europe</small></div>
                        <div className="capital"><small>Capital : Berlin</small></div>
                    </div>
                </div>
            </div>
            <div className="flag-container">
                <img className="flag-image" src={require("../../assets/images/canada-stock.jpg")} alt="" />
                <div className="holder">
                    <div className="country-name">Germany</div>
                    <div className="list-info">
                        <div className="population"><small>Population : 81,770,900</small></div>
                        <div className="region"><small>Region : Europe</small></div>
                        <div className="capital"><small>Capital : Berlin</small></div>
                    </div>
                </div>
            </div>
            <div className="flag-container">
                <img className="flag-image" src={require("../../assets/images/canada-stock.jpg")} alt="" />
                <div className="holder">
                    <div className="country-name">Germany</div>
                    <div className="list-info">
                        <div className="population"><small>Population : 81,770,900</small></div>
                        <div className="region"><small>Region : Europe</small></div>
                        <div className="capital"><small>Capital : Berlin</small></div>
                    </div>
                </div>
            </div>
            <div className="flag-container">
                <img className="flag-image" src={require("../../assets/images/canada-stock.jpg")} alt="" />
                <div className="holder">
                    <div className="country-name">Germany</div>
                    <div className="list-info">
                        <div className="population"><small>Population : 81,770,900</small></div>
                        <div className="region"><small>Region : Europe</small></div>
                        <div className="capital"><small>Capital : Berlin</small></div>
                    </div>
                </div>
            </div>
            <div className="flag-container">
            <img className="flag-image" src={require("../../assets/images/canada-stock.jpg")} alt="" />
                <div className="holder">
                    <div className="country-name">Germany</div>
                    <div className="list-info">
                        <div className="population"><small>Population : 81,770,900</small></div>
                        <div className="region"><small>Region : Europe</small></div>
                        <div className="capital"><small>Capital : Berlin</small></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FlagCards
