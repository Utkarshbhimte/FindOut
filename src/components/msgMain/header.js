/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';
import Navbar from './navbar'

class Header extends Component {
    render() {
        return (
            <header>
                <h4>FindOut@RNSIT</h4>
                <Navbar search={this.props.search} updateSearch={this.props.updateSearch}/>
            </header>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;