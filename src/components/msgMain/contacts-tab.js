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

    renderSmallDp(key, i){
        const person = this.props.contacts[key];

        const backgroundStyle = {
            backgroundImage: "url("+ person.image +")",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };

        return(
            <div
                key={key}
                className={` ${( i==0 ? ' clicked ' : '')} small-dp `}
                onClick={(e) => {this.props.updatePreview(e, key)}}
                style={ backgroundStyle }
                >
                {/*<img src={person.image} />*/}
            </div>
        )
    }

    render(){
        return (
            <div>
                <CSSTransitionGroup
                    className="contacts-tab"
                    component='div'
                    transitionName="dp"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {Object.keys(this.props.contacts).map(this.renderSmallDp)}
                </CSSTransitionGroup>
                <div className="preview-wrap">
                    <CSSTransitionGroup
                        transitionName="preview"
                        transitionEnterTimeout={700}
                        transitionLeaveTimeout={900}>
                            <Preview key={ this.props.preview.name } updatePreview={this.props.updatePreview} preview={this.props.preview} />
                    </CSSTransitionGroup>
                </div>
            </div>

        );
    }
}

export default ContactTab;
