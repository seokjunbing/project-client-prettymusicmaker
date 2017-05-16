// import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { signinUser, signupUser } from '../actions';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    // this.onEmailChange = this.onEmailChange.bind(this);
    // this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.handleSignIn = this.handleSignIn.bind(this);
    // this.handleSignUp = this.handleSignUp.bind(this);
  }

  // onEmailChange(event) {
  //   this.setState({ email: event.target.value });
  // }
  //
  // onPasswordChange(event) {
  //   this.setState({ password: event.target.value });
  // }

  // handleSignIn() {
  //   if (this.state.email === '' || this.state.password === '') {
  //     console.log('Please enter a valid email and password.');
  //     return;
  //   }
  //   const account = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
  //   this.props.signinUser(account, this.props.history);
  // }

  // handleSignUp() {
  //   if (this.state.email === '' || this.state.password === '') {
  //     console.log('Please enter a valid email and password.');
  //     return;
  //   }
  //   const account = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
  //   this.props.signupUser(account, this.props.history);
  // }

  render() {
    return (
      <div id="splash">
        <div id="homebar">
          <div id="title">pretty music maker</div>
        </div>
        <div id="signin">.
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button>Sign In</button>
          <button>Sign Up</button>
          <NavLink exact to="/"><button>Cancel</button></NavLink>
        </div>
      </div>
    );
  }
}

export default (Splash);