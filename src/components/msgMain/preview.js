/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';

function getStudentYear(year) {
    let a = new Date();
    let currentYear  = a.getFullYear();
    let month = a.getUTCMonth() + 1;

    //because student go to next year on August
    if(month < 7){
        currentYear -= 1;
    }

    switch (currentYear  - year){
        case 0:
            return 'First year';
        case 1:
            return 'Second year';
        case 2:
            return 'Third year';
        case 3:
            return 'Fourth year';
        default:
            return 'Graduated';
    }
}

class Preview extends Component {
    render() {

        const preview = this.props.preview;

        const backgroundStyle = {
            backgroundImage: "url('http://graph.facebook.com/"+ preview.fbUid +"/picture?width=600&height=700')",
        };

        return (
            <div className="preview-wrap" style={ backgroundStyle }>
                <div className="latest-message">
                    <div className="details">
                        <h4>{ preview.displayName }</h4>
                        <span>{getStudentYear(preview.admission_year) }, { preview.branch } </span>
                    </div>
                <div className="more"></div>
              </div>
            </div>
        );
    }
}

export default Preview;
