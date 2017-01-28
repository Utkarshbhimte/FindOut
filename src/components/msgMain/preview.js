/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';

function getStudentYear(year) {
    var a = new Date();
    var currentYear  = a.getFullYear();
    var month = a.getUTCMonth() + 1;

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
        // const image = 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/15894514_1889762547920534_3231168312415608458_n.jpg?oh=a0d458ca8d9833e408fd160304de97b0&oe=59497381';

        const preview = this.props.preview;
        console.log(this.props.preview);

        const backgroundStyle = {
            backgroundImage: "url("+ preview.image +")",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };

        console.log( preview );

        return (
            <div className="preview-wrap" style={ backgroundStyle }>
                <div className="latest-message">
                    <div className="details">
                        <h4>{ preview.name }</h4>
                        <span>{getStudentYear( preview.admission_year) }, { preview.branch } </span>
                    </div>
                    <div className="more">
                    </div>
                </div>
            </div>
        );
    }
}

Preview.propTypes = {};
Preview.defaultProps = {};

export default Preview;
