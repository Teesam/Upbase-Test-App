import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';

const Form = () => {


    return(
        <div className = 'Form'>

            <form>
                <h2 className = 'form-header'>Register</h2>
                <div className = 'form-div'>
                    <label for = 'name'>Name</label>
                    <input name = 'name' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'e-mail'>E-mail</label>
                    <input name = 'e-mail' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'username'>Username</label>
                    <input name = 'username' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'password'>Password</label>
                    <input name = 'password' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <label for = 'password-check'>Confirm Password</label>
                    <input name = 'password-check' type = 'text' />
                </div>
                <div className = 'form-div'>
                    <button id = 'form-btn'>Submit</button>
                </div>
                <div id = 'form-flat'>
                    <p>Already have an account?</p>
                    <Link to = 'signIn' id = 'signIn-link'>Sign-In</Link>
                </div>


            </form>
        </div>
    )
}

export default Form;