/**
 * Created by utkarsh on 26/01/17.
 */
import React, {
    Component
} from 'react';
import base from '../base';
import $ from 'jquery'
import Header from './header'
import ContactTabs from './contacts-tab'
import Login from './login'
import _ from 'lodash'

let Contacts = {
    'jehrdqt9zvjzh7a4f5hfr':{
        admission_year:2013,
        branch:"EEE",
        displayName:"Utkarsh Bhimte",
        email:"utkarshbhimte95@gmail.com",
        fbUid:"1508539349186197",
        photoURL:"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/14370006_1314403258599808_6975450530949412410_n.jpg?oh=0637d1354d11230c4ce30ee83ca99247&oe=59411863",
        uid:"yHAOWnES3zcUm2D4jz8Udjv0kk53"
    }
};

class MsgMain extends Component {
    constructor(){
        super();

        this.state = {
            contacts : Contacts,
            preview: Contacts[Object.keys(Contacts)[0]],
            search : '',
            userRegistrationConfirm: false,
            user: {
                admission_year:null,
                branch:null,
                displayName:null,
                email:null,
                fbUid:null,
                photoURL:null,
                uid:null
            }
        };

        this.updateRegistrationData = this.updateRegistrationData.bind(this);
        this.confirmRegistration = this.confirmRegistration.bind(this);
        this.updatePreview = this.updatePreview.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentWillMount(){

        let LocalStorageUserRef = localStorage.getItem('user');

        if(LocalStorageUserRef){
            const localUser = JSON.parse(LocalStorageUserRef);
            console.log('user already exist?',_.every(this.state.contacts, (elem) => { console.log(elem.fbUid,' vs ', localUser.fbUid ); return elem.fbUid === localUser.fbUid}));

            if(_.every(this.state.contacts, (elem) => { console.log(elem.fbUid,' vs ', localUser.fbUid ); return elem.fbUid === localUser.fbUid})){
                this.setState({
                    user: JSON.parse(LocalStorageUserRef),
                    userRegistrationConfirm: true
                });
            }
        }

        this.ref = base.syncState(`contacts` ,{
            context : this,
            state : 'contacts'
        })

    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    updatePreview(e,key){
        $('.small-dp').removeClass('clicked');
        e.target.className += ' clicked';
        const preview = {...this.state.contacts[key]};
        this.setState({ preview });
    }

    updateSearch(e){
        this.setState({ search: e.target.value.substr(0,20) });
    }

    // This is for Authentication flow
    updateRegistrationData( src, dest ){
        let user = this.state.user;
        user[dest] = src;
        this.setState({user});
    }

    confirmRegistration(){
        this.setState({
            userRegistrationConfirm: true,
        });
        localStorage.setItem(`user`,JSON.stringify(this.state.user));

        let tempContacts = {...this.state.contacts};
        console.log(tempContacts);
        let key = Math.random().toString(36).substring(12);
        tempContacts[key] = this.state.user;
        console.log(tempContacts);
        this.setState({
            contacts: tempContacts
        });
    }


    render() {
        // console.log('Full user data gathered: ' ,_.every(this.state.user, function(elem) { return elem !== null; }));
        if(!(this.state.userRegistrationConfirm)){
            return(
                <div className="h-full">
                    <div className="login-wrap">
                        <Login user={this.state.user}
                               updateRegistrationData={this.updateRegistrationData}
                               confirmRegistration={this.confirmRegistration}
                        />
                    </div>
                    {this.renderError()}
                </div>

            )
        }else{
            return (
                <div className="h-full">
                    <div className="contain-all">
                        <Header search={this.state.search} updateSearch={this.updateSearch}/>
                        <ContactTabs contacts={this.state.contacts}
                                     preview={this.state.preview}
                                     search={this.state.search}
                                     updatePreview={this.updatePreview}/>
                    </div>
                    {this.renderError()}
                </div>
            );
        }

    }
    renderError(){
        return(
            <div id="error" className="h-full">
                <h4>Sorry but this site should only be visited on mobile devices..</h4>
                <span><i>and also this is an alpha version.</i></span>

            </div>
        )
    }
}

MsgMain.propTypes = {};
MsgMain.defaultProps = {};

export default MsgMain;
