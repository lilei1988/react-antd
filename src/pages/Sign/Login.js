import React, {Component} from 'react';
import './Login.scss';

class Login extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="wrapper"></div>
        <form className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autoFocus=""/>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""/>

          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/>
            Remember me</label>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    );
  }

}

export default Login;