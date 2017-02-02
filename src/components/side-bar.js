/**
 * Created by utkarsh on 02/02/17.
 */

import React, {
    Component
} from 'react';
import $ from 'jquery';

class Sidebar extends Component{
    render()
    {
        $('.hamburger-icon').on('click', function(event) {
            event.preventDefault();
            $('.sidenav').toggleClass('active');
            $('.hamburger-icon').toggleClass('active');
        });

        return (
            <div>
                <div className="hamburger-icon">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="sidenav">
                    <ul>
                        <li>Give Feedback or Suggest Features</li>
                    </ul>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;

