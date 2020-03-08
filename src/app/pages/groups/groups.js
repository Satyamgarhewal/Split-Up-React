import React, { Component } from 'react';
import { connect } from 'react-redux';

class Group extends Component {
  constructor() {
    super();
  }
  render() {
    return <div>This is a group page</div>;
  }
}

export default connect()(Group);
