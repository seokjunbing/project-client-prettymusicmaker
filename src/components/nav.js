import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { signoutUser } from '../actions';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signoutandstop = this.signoutandstop.bind(this);
    this.stopmusic = this.stopmusic.bind(this);
    this.clearTiles = this.clearTiles.bind(this);
  }

  stopmusic() {
    this.props.stop();
  }

  signoutandstop() {
    this.props.signoutUser(this.props.history);
    this.props.stop();
  }

  clearTiles() {
    this.props.clear();
    this.props.stop();
  }

  // Icon version
  render() {
    if (this.props.stop) {
      return (
        <nav>
          <NavLink id="nav-button" exact to="/profile"><i className="fa fa-home" aria-hidden="true" onClick={() => this.props.stop()} /></NavLink>
          <NavLink id="nav-button" exact to="/editor"><i className="fa fa-plus" aria-hidden="true" onClick={this.clearTiles} /></NavLink>
          <NavLink exact to="/" onClick={() => this.signoutandstop()}><button>log out</button></NavLink>
        </nav>
      );
    } else {
      return (
        <nav>
          <NavLink id="nav-button" exact to="/profile"><i className="fa fa-home" aria-hidden="true" /></NavLink>
          <NavLink id="nav-button" exact to="/editor"><i className="fa fa-plus" aria-hidden="true" /></NavLink>
          <NavLink exact to="/" onClick={() => this.props.signoutUser(this.props.history)}><button>log out</button></NavLink>
        </nav>
      );
    }
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  });

export default withRouter(connect(mapStateToProps, { signoutUser })(Nav));
