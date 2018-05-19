import React, {Component} from 'react';
import './LogoSVG.css';
import logo from './logo.svg';

class LogoSVG extends Component {
    render() {
        return (
            <div className="logo_wrap">
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default LogoSVG;