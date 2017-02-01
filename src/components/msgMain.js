/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';
import base from '../base';

import Header from './msgMain/header'
import Navbar from './msgMain/navbar'
import ContactTabs from './msgMain/contacts-tab'
import Login from './login'

let Contacts = {
    // 'ds3232hgvj23':{
    //     name: 'Utkarsh Bhimte',
    //     image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/14370006_1314403258599808_6975450530949412410_n.jpg?oh=18402b62300e5df720db05fe0fc69548&oe=594910C7',
    // },
    // '232hn4v3v5c3':{
    //     name: 'Sujay Kumar',
    //     image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/11000285_1021848081178496_3688005437313443313_n.jpg?oh=48991ec1554fc4ed9932294b041d05b2&oe=594A784A'
    // },
    // 'fdsjbk8fdsmbn3':{
    //     name: 'Prashant Sharma',
    //     image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/12688011_10208846811233896_117816568015372803_n.jpg?oh=6fa2a0d4b759905735e453383f58403c&oe=591FF2B0'
    //     branch: 'IS',
    //     admission_year: 2014    },
    'uiou232vhj23o':{
        name: "Saujanya Nagpal",
        image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/15894514_1889762547920534_3231168312415608458_n.jpg?oh=a0d458ca8d9833e408fd160304de97b0&oe=59497381',
        branch: 'IS',
        admission_year: 2014
    },
    'uiou232nvj23o':{
        name: "Anusha Acharya",
        image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/14900320_1404870672874743_663108496078802753_n.jpg?oh=980470111c3b89fd4b95f77e682aabcc&oe=591235EE',
        branch: 'CS',
        admission_year: 2015
    },
    'dsdfn9jknzjki':{
        name: 'Shubham Kanth',
        image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/16003222_1081489585293946_3265617616157899583_n.jpg?oh=76c2801aa6d63a916de451d60066deb4&oe=59126074',
        branch: 'IS',
        admission_year: 2014
    },
    'dsfjk243974h4h':{
        name: 'Navneet Tirth',
        image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/10422935_899719646746010_1535978486254929389_n.jpg?oh=820368eb43db24f55c014de6c5fd81eb&oe=59134704',
        branch: 'ECE',
        admission_year: 2015
    }
};

class MsgMain extends Component {
    constructor(){
        super();

        this.state = {
            contacts : Contacts,
            preview: Contacts[Object.keys(Contacts)[0]],
            uid: null,
            user: {
                displayName: null,
                email: null,
                photoURL: null,
                admission_year: null,
                branch: null,
                fbUid: null
            }
        };

        this.updatePreview = this.updatePreview.bind(this);
        this.updateRegistrationData = this.updateRegistrationData.bind(this);

    }

    componentWillMount(){
          this.ref = base.syncState(`contacts` ,{
                context : this,
                state : 'contacts'
          })
        }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    updatePreview(key){
        const preview = {...this.state.contacts[key]};
        this.setState({ preview });
    }


    // This is for Authentication flow

    updateRegistrationData( src, dest ){
        let user = this.state.user;
        console.log(user);
        console.log('dest:', dest);
        console.log('src:', src);
        user[dest] = src;
        console.log(user);
        this.setState({user});
    }


    // Render Fucntion

    render() {

        if(this.state.uid === null){
            return(
                <div>
                    <Login uid={this.state.uid}
                           user={this.state.user}
                           updateRegistrationData={this.updateRegistrationData}
                    />
                </div>
            )
        }else{
            return (
                <div className="contain-all">
                    <Header />
                    <Navbar />
                    <ContactTabs contacts={this.state.contacts}
                                 preview={this.state.preview}
                                 updatePreview={this.updatePreview}/>
                </div>
            );
        }

    }
}

MsgMain.propTypes = {};
MsgMain.defaultProps = {};

export default MsgMain;
