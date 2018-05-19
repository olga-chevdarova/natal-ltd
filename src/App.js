import React, { Component } from 'react';
// import logo from './logo.svg';
/*<img src={logo} className="App-logo" alt="logo" />*/
import './App.css';
import PageContacts from './Pages/Contacts/PageContacts';
import Header from './Components/Header/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <PageContacts/>
            </div>
        );
    }
}

export default App;
