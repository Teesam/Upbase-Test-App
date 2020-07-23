import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () =>{
       

    return(
        <div className = 'Nav'>
            <h2 id = 'logo'>NewsUpbase</h2>
            <div>
                <ul>
                    <li>
                        <NavLink to = '/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/report'>Report</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/uploaded'>Uploaded</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/register'>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to = '/signIn'>Sign-In</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Nav;
