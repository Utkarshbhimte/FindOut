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

    if(month < 7){
        currentYear -= 1;
    }

    switch (currentYear  - year){
        case 0:
            return 'First year';
            break;
        case 1:
            return 'Second year';
            break;
        case 2:
            return 'Third year';
            break;
        case 3:
            return 'Fourth year';
            break;
        default:
            return 'Graduated';
            console.log(year);
    }
}

class Preview extends Component {
    render() {

        const preview = this.props.preview;

        const backgroundStyle = {
            backgroundImage: "url("+ preview.image +")",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };

        return (
            <div>
            <div className="preview" style={ backgroundStyle }>

            </div>
            <div className="latest-message">
                <div className="details">
                    <h4>{ preview.name }</h4>
                    <span>{getStudentYear( preview.admission_year) }, { preview.branch } </span>
                </div>
                <div className="more">
                </div>
            </div>
                {/*<img src={preview.image} alt={preview.name}/>*/}

            </div>
        );
    }
}

Preview.propTypes = {};
Preview.defaultProps = {};

export default Preview;
