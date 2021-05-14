import React, { Fragment } from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <Fragment>
            <NavLink to='/register' activeClassName="bobo" className="nav">
                Register
            </NavLink>
        </Fragment>
    )    
}

export default NavBar