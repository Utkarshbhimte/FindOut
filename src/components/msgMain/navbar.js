/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav>
                <input type="text"
                       onChange={this.props.updateSearch}
                       required/>
            </nav>
        );
    }
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
