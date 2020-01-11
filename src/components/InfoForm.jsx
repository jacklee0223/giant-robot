import React, { Component } from 'react';
import './InfoForm.css';

export default class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      addressTwo: '',
      missingRequiredFields: []
    };
  }

  onInputChange = (e, fieldName) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState({
      [fieldName]: value
    });
  };

  handleNext = () => {
    const { firstName, lastName, address, addressTwo } = this.state;
  };

  render() {
    const { firstName, lastName, address, addressTwo } = this.state;

    return (
      <div className="info-form">
        <div className="label-input-container">
          <label>FIRST NAME</label>
          <input
            className={firstName.length > 0 ? 'has-input' : ''}
            onChange={e => this.onInputChange(e, 'firstName')}
          />
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
        <button className="next-button" onClick={this.handleNext}>
          NEXT →
        </button>
      </div>
    );
  }
}
