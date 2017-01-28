/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';

class Preview extends Component {
    render() {
        // const image = 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/15894514_1889762547920534_3231168312415608458_n.jpg?oh=a0d458ca8d9833e408fd160304de97b0&oe=59497381';
        const backgroundStyle = {
            // backgroundImage: "url("+ this.props.preview.image +")",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };
        // console.log(this.props.preview.image);
        return (
            <div className="preview-wrap" style={ backgroundStyle }>
                {/*<img src={this.props.preview.image} />*/}
                <div className="latest-message">
                    <div className="details">
                        {/*<h4>{ this.props.preview.name }</h4>*/}
                        <span>3rd Year, IS</span>
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
