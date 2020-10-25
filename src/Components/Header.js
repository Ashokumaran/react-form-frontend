import React from 'react'
import routes from '../routes';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
        <h4 className="ml-4 mt-2">React-APP</h4>
          <Link className="ml-3 nav-link text-secondary" to={routes.home}>Home</Link>
          <Link className="ml-3 nav-link text-secondary" to={routes.userdata}>User Entry</Link>
          <Link className="ml-3 nav-link text-secondary" to={routes.usersummary}>Details</Link>
        </header>
    )
}

export default Header
