import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css';

const Nav = props => (
  <div className="row">

    <div className="col-lg-6">
      <li><Link to='/'>About</Link></li>
    </div>

    {/* <div className="col-lg-4">
    <li><Link to='/Portfolio'>Portfolio</Link></li>
    </div> */}

    <div className="col-lg-6">
    <li><Link to='/Contact'>Contact</Link></li>
    </div>

  </div>
);

export default Nav;