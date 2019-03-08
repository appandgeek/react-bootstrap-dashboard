import React, { Component } from 'react';

import './App.css';

import Maincontent from './components/maincontent/maincontent';
import Navbar from './components/header/navbar';
import Notfound from './components/account/404';
import Servererror from './components/account/500';
import Recoverpassword from './components/account/recoverpassword';
import Signup from './components/account/signup';
import Signin from './components/account/signin';

class App extends Component {
  render() {
    const currentPath = window.location.pathname;

    return (
      <div className="App">
        {currentPath.includes('signup') ? null : currentPath.includes('signin') ? null : currentPath.includes('404') ? null : currentPath.includes('500') ? null : currentPath.includes('recover-password') ? null : <Navbar />}
        {currentPath.includes('signup') ? <Signup /> : currentPath.includes('signin') ? <Signin /> : currentPath.includes('404') ? <Notfound /> : currentPath.includes('500') ? <Servererror /> : currentPath.includes('recover-password') ? <Recoverpassword /> : <Maincontent />}

      </div>
    );
  }
}

export default App;
