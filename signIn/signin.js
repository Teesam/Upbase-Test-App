import React, { useState } from 'react';
import './signin.css';
import Nav from '../home/nav/nav';
import Footer from '../home/footer/footer';
import { Link } from 'react-router-dom';


const SignIn = () => {

    

    return(
        <div className = 'SignIn'>
            <Nav />
                <form id = 'signIn-form'>
                    <h2 id = 'signIn-header'>Sign-In</h2>
                    <div className = 'SignIn-header-div'>
                        <label htmlFor = 'username'>Username</label>
                        <input name = 'username' type = 'text' id = 'signIn-input' />
                    </div>
                    <Link to = '/signInPassword' className = 'SignIn-btn'>Next</Link>

                    <p id = 'register-cue'>Don't have an account? <Link to = '/register' id = 'cue-link'>Register</Link></p>
                </form>
            <Footer />
        </div>
    )
}

export default SignIn;