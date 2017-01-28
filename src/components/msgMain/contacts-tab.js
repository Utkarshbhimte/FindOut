/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';

class ContactTab extends Component {
    constructor(){
        super();

        this.renderSmallDp = this.renderSmallDp.bind(this);
        this.updatePreview = this.updatePreview.bind(this);

    }

    renderSmallDp(key){
        const person = this.props.contacts[key];

        return(
            <div key={key} className="small-dp"
                 {/*onClick={() => {this.updatePreview(key)}}*/}
            >
                <img src={person.image} />
            </div>
        )
    }

    renderPreview(currKey = Object.keys(this.props.contacts)[0] ){


        const preview = this.props.contacts[currKey];

        const backgroundStyle = {
            backgroundImage: "url("+ preview.image +")",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };

        console.log( preview , backgroundStyle);

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

    render(){
        return (
            <div>
                <div className="contacts-tab">
                    {Object.keys(this.props.contacts).map(this.renderSmallDp)}
                </div>
                { this.renderPreview() }
            </div>

        );
    }
}

export default ContactTab;
