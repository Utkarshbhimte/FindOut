/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';
import Preview from './preview';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class ContactTab extends Component {
    constructor(){
        super();

        this.renderSmallDp = this.renderSmallDp.bind(this);

    }

    // Renders the small DPs on top
    renderSmallDp(key, i){
        const person = this.props.contacts[key];

        const backgroundStyle = {
            backgroundImage: "url("+ person.image +")"
        };

        return(
            <div
                key={key}
                className={` ${( i===0 ? ' clicked ' : '')} small-dp `}
                onClick={(e) => {this.props.updatePreview(e, key)}}
                style={ backgroundStyle }
                >
            </div>
        )
    }

    render(){

        //The array of filtered element keys
        let filteredContact = Object.keys(this.props.contacts).filter(
            (key) => {
                return this.props.contacts[key].name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <CSSTransitionGroup
                    className="contacts-tab"
                    component='div'
                    transitionName="dp"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1}
                    transitionLeaveTimeout={1}
                >
                    {filteredContact.map(this.renderSmallDp)}
                </CSSTransitionGroup>

                <div className="preview-wrap">
                    <CSSTransitionGroup
                        transitionName="preview"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={1000}>
                            <Preview key={ this.props.preview.name } updatePreview={this.props.updatePreview} preview={this.props.preview} />
                    </CSSTransitionGroup>
                </div>
            </div>

        );
    }
}

export default ContactTab;
