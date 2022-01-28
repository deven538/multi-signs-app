import React from "react";
import './index.css'

const Header = () => {
    return(
        <div className="header-main">
            <div className="meity-logo">
                <img src="https://res.cloudinary.com/cdac01/image/upload/v1643370232/new-logo_hjxorl.jpg" className="meity-logo" alt="meity-logo"/>
            </div>
            <h1 className="m-s-app-heading">Multisign Application</h1>
            <div className="c-dac-logo">
                <img src="https://res.cloudinary.com/cdac01/image/upload/v1643349971/c-dac_logo_jmr1tk.jpg" className="c-dac-logo" alt="c-dac-logo"/>
            </div>
        </div>
    )
}

export default Header