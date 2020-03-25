import React, { Component, cloneElement } from 'react';
import login from './login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../actions/loginAction';
import LoginForm from '../../components/loginForm/loginForm';
class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      mobile: ''
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleUserNameChange = e => {
    const re = /^[a-zA-Z0-9]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ userName: e.target.value });
    }
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleMobileChange = e => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === '' ||
      (re.test(e.target.value) && e.target.value.length <= 10)
    ) {
      this.setState({ mobile: e.target.value });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    // const { register } = this.props;
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password
    };
    this.props.register(formData);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      mobile: ''
    });
  };
  render() {
    return (
      <div>
        <LoginForm
          userDetails={this.handleChange}
          userEmail={this.handleEmailChange}
          userMobile={this.handleMobileChange}
          userUserName={this.handleUserNameChange}
          dataSubmit={this.handleSubmit}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          userName={this.state.userName}
          password={this.state.password}
          mobile={this.state.mobile}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    register: bindActionCreators(registerUser, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(LoginUser);
