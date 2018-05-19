import React, { Component } from 'react';
// import logo from './logo.svg';
/*<img src={logo} className="App-logo" alt="logo" />*/
import './App.css';
import PageContacts from './Pages/Contacts/PageContacts';
import Header from './Components/Header/Header';
import PageMain from "./Pages/Main/PageMain";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                {/*<PageContacts/>*/}
                <PageMain/>
            </div>
        );
    }
}

export default App;
