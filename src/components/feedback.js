/**
 * Created by utkarsh on 02/02/17.
 */

import React, {
    Component,
    PropTypes,
} from 'react';

class Feedback extends Component {
    render() {
        return (
            <div className="h-full">
                <form onClick={submitFeedback}>
                    <span htmlFor="text">This is an attempt to make some awesome. I already have some features in mind</span>
                    <ul>
                        <li>Students will be able to search and network with others who have same interests</li>
                        <li>A chatroom for every class with features focused with a Students requirements in mind</li>
                    </ul>
                    <textarea classID="text" cols="30" rows="10">

                    </textarea>
                </form>
            </div>
        );
    }
}

Feedback.propTypes = {};
Feedback.defaultProps = {};

export default Feedback;
