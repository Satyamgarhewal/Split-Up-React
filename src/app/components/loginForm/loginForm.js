import React from 'react';
import loginForm from './loginForm.css';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/loginAction';
function LoginForm(props) {
  const {
    userDetails,
    userEmail,
    userUserName,
    userMobile,
    dataSubmit
  } = props;
  const { firstName, lastName, email, userName, mobile, password } = props;
  return (
    <div className="loginFormContainer">
      <form onSubmit={dataSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          className="loginFormField"
          onChange={userDetails}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          className="loginFormField"
          onChange={userDetails}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="userName"
          value={userName}
          className="loginFormField"
          onChange={userUserName}
          placeholder="User Name"
        />
        <input
          type="text"
          name="email"
          value={email}
          className="loginFormField"
          onChange={userEmail}
          placeholder="Email"
        />
        <input
          type="text"
          name="mobile"
          value={mobile}
          className="loginFormField"
          onChange={userMobile}
          placeholder="Mobile Number"
        />
        <input
          type="password"
          name="password"
          value={password}
          className="loginFormField"
          onChange={userDetails}
          placeholder="Password"
        />
        <input type="submit" value="Register" className="loginFormButton" />
      </form>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    register: (registerUser, dispatch)
  };
};

export default connect()(LoginForm);
