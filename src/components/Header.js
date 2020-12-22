import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <nav>
            <div className="nav-wrapper white">
                 <a href="#!" className="brand-logo blue-grey darken-4">{title}</a>
            </div>
        </nav>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;