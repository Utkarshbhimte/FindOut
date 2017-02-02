/**
 * Created by utkarsh on 31/01/17.
 */
import React, {
    Component
} from 'react';
import base from '../base';
import Preview from './preview'

class Login extends Component {
    constructor(){
        super();

        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);
        this.addCustomUserData = this.addCustomUserData.bind(this);
    }

    addCustomUserData(e){
        e.preventDefault();

        this.props.updateRegistrationData( parseInt(this.admission_year.value), 'admission_year');
        this.props.updateRegistrationData( this.branch.value, 'branch');

        this.registrationForm.reset();
    }

    authenticate(provider){
        console.log(`trying to login with ${provider}`);

        base.authWithOAuthPopup(provider, this.authHandler);
    }

    authHandler(err, authData){
        const fetchedData  = authData.user.providerData[0];

        console.log(authData);

        this.props.updateRegistrationData( fetchedData.displayName, 'displayName' );
        this.props.updateRegistrationData( fetchedData.email , 'email');
        this.props.updateRegistrationData( fetchedData.photoURL, 'photoURL');
        this.props.updateRegistrationData( fetchedData.uid, 'fbUid');
        this.props.updateRegistrationData( authData.user.uid, 'uid');

        if(err){
            console.log(err);
        }
    }

    render() {
            if(this.props.user.displayName === null){
             return(
                 <div className="login-step-one">
                     <button onClick={() => {this.authenticate('facebook')} }>Sign in with Facebook</button>
                 </div>
             )
            }else if(this.props.user.displayName !== null && this.props.user.branch === null){
                return(
                    <div className="login-step-two">
                        <form onSubmit={(e) => {this.addCustomUserData(e)} }
                              ref={(input) => this.registrationForm = input}>
                            <h4>{`Hey there ${(this.props.user.displayName).split(' ')[0]},`}</h4>
                            <input type="number" ref={(input) => this.admission_year = input} placeholder="Admission Year"/>
                            <select  ref={(input) => this.branch = input} placeholder="What is your branch?">
                                <option value="" disabled="disabled">Choose your Branch</option>
                                <option value="EEE">EEE</option>
                                <option value="IS">IS</option>
                                <option value="CS">CS</option>
                                <option value="IT">IT</option>
                                <option value="ECE">ECE</option>
                                <option value="MECH">MECH</option>
                                <option value="CIVIL">CIVIL</option>
                            </select>
                            <input type="submit" value="Finish this already"/>
                        </form>
                    </div>
                )
            }else if(this.props.user.branch !== null){
                return(
                    <div className="login-step-three">
                        <div className="confirm-wrap">
                            <span>This is what your profile will look like</span>
                            <button className="button-primary" onClick={this.props.confirmRegistration}> <span>yeah yeah whatever,</span>
                                <span>proceed already</span> </button>
                        </div>
                        <Preview preview={this.props.user}/>
                    </div>
                )
            }
    }
}

export default Login;
