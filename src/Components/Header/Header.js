import React from 'react';
import './Header.css';
import Navigation from './Navigation/Navigation';
import LogoSVG from "./LogoSVG/LogoSVG";

const Header = () => {

    return (
      <div>
          <div className="logo__wrap">
              <LogoSVG/>
          </div>
          <Navigation/>
      </div>
    );
};

export default Header;
