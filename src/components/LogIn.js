import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }


  render () {
    return (
      <div>
        <FacebookLogin socialId="1413963141978270"
                       language="en_US"
                       scope="public_profile,user_friends,user_actions.books"
                       fields="name,email,picture"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       version="v2.5"
                       class="facebook-login"
                       buttonText="FACEBOOK"/>
      </div>
    );
  }

}

export default Login;
