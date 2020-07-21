import React from 'react';
import '../signin.css';
import './signinpassword.css';
import Nav from '../../home/nav/nav';
import Footer from '../../home/footer/footer';
import { Link } from 'react-router-dom';


const SignInPassword = () => {



    return(
        <div className = 'SignIn'>
            <Nav />
                <form id = 'signIn-form'>
                    <h2 id = 'signIn-header'>Sign-In</h2>
                    <div className = 'SignIn-header-div'>
                        <label for = 'password'>Password</label>
                        <input name = 'password' type = 'password' id = 'signIn-input' />
                    </div>
                    <Link to = '/signIn' className = 'SignIn-btn'>Previous</Link>
                    <Link to = '/' className = 'SignIn-btn' id = 'submit'>Submit</Link>
                </form>
            <Footer />
        </div>
    )
}

export default SignInPassword;