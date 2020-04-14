import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/navbar';
class Activities extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default connect()(Activities);
