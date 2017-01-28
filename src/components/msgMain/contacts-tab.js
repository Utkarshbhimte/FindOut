/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component,
    PropTypes,
} from 'react';
import Preview from './preview'

class ContactTab extends Component {
    constructor(){
        super();

        this.renderSmallDp = this.renderSmallDp.bind(this);

    }

    renderSmallDp(key){
        const person = this.props.contacts[key];

        return(
            <div key={key} className="small-dp" onClick={() => {this.updatePreview(key)}}>
                <img src={person.image} />
            </div>
        )
    }

    updatePreview(currKey){

        console.log(currKey);

        const preview = this.props.contacts[currKey];

        const backgroundStyle = {
            backgroundImage: "url("+ preview.image +")",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };

        console.log(this.props, preview);

        return (
            <div className="preview-wrap" style={ backgroundStyle }>
                {/* <img src={this.props.preview.image} /> */}
                <div className="latest-message">
                    <div className="details">
                        <h4>{ preview.name }</h4>
                        <span>3rd Year, IS</span>
                    </div>
                    <div className="more">
                    </div>
                </div>
            </div>
        );
    }

    // preview = this.props.contacts[Object.keys(this.props.contacts)[0]];

    render(){
        return (
            <div>
                <div className="contacts-tab">
                    {Object.keys(this.props.contacts).map(this.renderSmallDp)}
                </div>
                { this.updatePreview( Object.keys(this.props.contacts)[3] ) }
            </div>

        );
    }
}

ContactTab.propTypes = {};
ContactTab.defaultProps = {};

export default ContactTab;
