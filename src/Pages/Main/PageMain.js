import React, {Component} from 'react';
import './PageMain.css';
import Background  from './background.jpg';
import Text from "../../Components/Text/Text";



class PageMain extends Component {
    text() {
        return <span>A company providing <span className="text_marked"> Accountancy and Tax Services </span> <br/> with a combined total of over <span className="text_bigger"> 67 years </span> <br/>of National and International experience.</span>
    }
    render() {
        return (

                <div className="pageMain__background-img" style={ { backgroundImage: 'url(' + Background + ')',}}>
                    <div className="pageMain__color-wrap">
                    </div>
                        <div className="centered-text__wrap">
                            <Text text={this.text()}/>
                        </div>
                </div>

        );
    }
}

export default PageMain;