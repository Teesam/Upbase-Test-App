import React from 'react';
import './App.css';
import Home from './component/home/home';
import Register from './component/register/register';
import { Route } from 'react-router-dom';
import SignIn from './component/signIn/signin';
import SignInPassword from './component/signIn/signinpassword/signinpassword';
import Report from './component/report/report';
import Uploaded from './component/uploaded/uploaded';

function App() {
  return (
    <div className="App">
        <Route path = '/' exact strict component = {Home} /> 

        <Route path = '/report' exact strict component = {Report} /> 

        <Route path = '/uploaded' exact strict component = {Uploaded} /> 


        <Route path = '/register' exact strict component = {Register} /> 

        <Route path = '/signin' exact strict component = {SignIn} /> 

        <Route path = '/signinpassword' exact strict component = {SignInPassword} /> 
    </div>
  );
}

export default App;
