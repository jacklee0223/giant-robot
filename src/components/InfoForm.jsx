import React, { Component } from 'react';
import './InfoForm.css';

export default class InfoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-form">
        <div className="label-input-container">
          <label>Name</label>
          <input />
        </div>
      </div>
    );
  }
}
