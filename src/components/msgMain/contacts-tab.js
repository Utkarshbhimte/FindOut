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
            <div key={key} className="small-dp" onClick={(e, {key}) => {this.updatePreview(e, key)}}>
                <img src={person.image} />
            </div>
        )
    }

    // updatePreview(e, key){
    //     console.log('clicked', key);
    //     const image = this.props.contacts[key].image;
    //     const backgroundStyle = {
    //         backgroundImage: "url(" + { image } + ")"
    //     };
    //
    //     return(
    //         <div className="preview-wrap" style={ backgroundStyle }>
    //             <div className="latest-message">
    //                 <p>Yo! sup? are you free this Sunday?</p>
    //             </div>
    //         </div>
    //     )
    // }

    render(){
        const preview = this.props.contacts[Object.keys(this.props.contacts)[0]];

        return (
            <div>
                <div className="contacts-tab">
                    {Object.keys(this.props.contacts).map(this.renderSmallDp)}
                </div>
                <Preview preview={ preview }/>
            </div>

        );
    }
}

ContactTab.propTypes = {};
ContactTab.defaultProps = {};

export default ContactTab;
