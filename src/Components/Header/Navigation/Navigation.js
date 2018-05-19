import React, {Component} from 'react';
import './Navigation.css';
import Navigation_Links from "./__links/Navigation_Links";

class Navigation extends Component {
    render() {
        const links=['Home', 'About Us', 'Services', 'Links', 'Contacts'];
        return (
            <aside className="navigation">
                <Navigation_Links links={links} />
            </aside>
        );
    }
}

export default Navigation;