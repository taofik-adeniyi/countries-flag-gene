import React from 'react'
import './HomePage.scss'
import NavBar from '../../components/NavBar/NavBar'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import FlagCards from '../../components/FlagCards/FlagCards'

function Homepage() {
    return (
        <React.Fragment>
          <NavBar />
          <div>
            <Search>
              <Filter />
            </Search>
          </div>
          <div className="flag-card-wrapper">
            <FlagCards />
          </div>
        </React.Fragment>
    )
}

export default Homepage
