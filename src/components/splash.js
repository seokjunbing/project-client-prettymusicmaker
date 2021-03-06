import { connect } from 'react-redux';
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { signinUser, signupUser } from '../actions';
import Nav from './nav';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSignIn() {
    if (this.state.email === '' || this.state.password === '') {
      console.log('Please enter a valid email and password.');
      return;
    }
    const account = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signinUser(account, this.props.history);
  }

  handleSignUp() {
    if (this.state.email === '' || this.state.password === '') {
      console.log('Please enter a valid email and password.');
      return;
    }
    const account = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signupUser(account, this.props.history);
  }

  render() {
    return (
      <div>
        <Nav />
        <div id="splash">
          <div id="signin">
            <input id="email" onChange={this.onEmailChange} value={this.state.email} placeholder="email" />
            <input type="password" onChange={this.onPasswordChange} value={this.state.password} placeholder="password" />
            <div id="splashbuttons">
              <button id="loginbutton" onClick={this.handleSignIn}>log in</button>
              <button onClick={this.handleSignUp}>sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (connect(null, { signinUser, signupUser })(Splash));
