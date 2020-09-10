import React from 'react'
import './NavBar.scss'

function NavBar() {
    return (
        <nav>
            {/* <div> */}
                <h3>Where in the world?</h3>
            {/* </div> */}
            <div>
                <ion-icon name="moon-outline"></ion-icon>
                <h5>Dark Mode</h5>
            </div>
        </nav>
    )
}

export default NavBar
