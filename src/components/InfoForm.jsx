import React, { Component } from 'react';
import './InfoForm.css';

export default class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      addressTwo: ''
    };
  }

  onInputChange = (e, fieldName) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState({
      [fieldName]: value
    });
  };

  render() {
    return (
      <div className="info-form">
        <div className="label-input-container">
          <label>FIRST NAME</label>
          <input onChange={e => this.onInputChange(e, 'firstName')} />
        </div>
        <div className="label-input-container">
          <label>LAST NAME</label>
          <input onChange={e => this.onInputChange(e, 'lastName')} />
        </div>
        <div className="label-input-container">
          <label>ADDRESS</label>
          <input onChange={e => this.onInputChange(e, 'address')} />
        </div>
        <div className="label-input-container">
          <label>ADDRESS 2 (OPTIONAL)</label>
          <input onChange={e => this.onInputChange(e, 'addressTwo')} />
        </div>
      </div>
    );
  }
}
