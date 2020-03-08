import React, { Component } from 'react';
import { connect } from 'react-redux';
class Activities extends Component {
  constructor() {
    super();
  }
  render() {
    return <div>This is an Activities page</div>;
  }
}

export default connect()(Activities);
