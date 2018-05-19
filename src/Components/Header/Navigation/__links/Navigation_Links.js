import React, {Component} from 'react';

class Navigation_Links extends Component {
    render() {
        return (
            <nav>
                {this.props.links.map( (link, index) => <a key={"navlink" + index}>{link}</a> )}
            </nav>
        );
    }
}

export default Navigation_Links;
