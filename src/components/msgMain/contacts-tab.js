/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
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
            <div key={key} className="small-dp" onClick={() => {this.props.updatePreview(key)}}>
                <img src={person.photoURL} />
            </div>
        )
    }

    render(){
        return (
            <div className="contacts-tab-wrap">
                <div className="contacts-tab">
                    {Object.keys(this.props.contacts).map(this.renderSmallDp)}
                </div>
                <Preview updatePreview={this.props.updatePreview}
                         preview={this.props.preview} />
            </div>

        );
    }
}

export default ContactTab;
