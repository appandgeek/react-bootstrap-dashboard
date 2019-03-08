import React from 'react';
import { Link } from 'react-router-dom';
const logocomponent = () => {

    return (
        <div className="u-header-logo">
            <Link className="u-header-logo" to="/">
                <img className="u-logo-desktop" src="./assets/img/logo.png" width="160" alt="Stream Dashboard" />
                <img className="img-fluid u-logo-mobile" src="./assets/img/logo-mobile.png" width="50" alt="Stream Dashboard" />
            </Link>
        </div>
    )
}

export default logocomponent;