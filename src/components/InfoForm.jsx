import _ from 'lodash';
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

  componentDidUpdate(prevProps, prevState) {
    const { missingRequiredFields } = this.state;
    const requiredFields = ['firstName', 'lastName', 'address'];

    if (_.isEqual(prevState, this.state)) {
      return;
    }

    if (missingRequiredFields.length) {
      const missingFields = missingRequiredFields.slice();

      _.map(requiredFields, field => {
        if (this.state[field].length) {
          _.pull(missingFields, field);
        }
      });

      this.setState({ missingRequiredFields: missingFields });
    }
  }

  onInputChange = (e, fieldName) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState({
      [fieldName]: value
    });
  };

  handleNext = () => {
    const { firstName, lastName, address, missingRequiredFields } = this.state;
    const hasAllRequired =
      firstName.length && lastName.length && address.length;
    const missingFields = [];

    if (!hasAllRequired) {
      const requiredFields = ['firstName', 'lastName', 'address'];

      _.map(requiredFields, field => {
        if (this.state[field].length < 1) {
          missingFields.push(field);
        }
      });

      this.setState({ missingRequiredFields: missingFields });
    }

    if (!missingRequiredFields.length && hasAllRequired) {
      this.setState({ missingRequiredFields: [] });
    }
  };

  renderInput = inputName => {
    const { missingRequiredFields } = this.state;

    return (
      <input
        className={`${this.state[inputName].length > 0 ? 'has-input' : ''} ${
          _.includes(missingRequiredFields, inputName) ? 'required-missing' : ''
        }`}
        onChange={e => this.onInputChange(e, inputName)}
      />
    );
  };

  render() {
    const {
      firstName,
      lastName,
      address,
      addressTwo,
      missingRequiredFields
    } = this.state;

    return (
      <div className="info-form">
        <div className="label-input-container">
          <label>FIRST NAME</label>
          {this.renderInput('firstName')}
        </div>
        <div className="label-input-container">
          <label>LAST NAME</label>
          {this.renderInput('lastName')}
        </div>
        <div className="label-input-container">
          <label>ADDRESS</label>
          {this.renderInput('address')}
        </div>
        <div className="label-input-container">
          <label>ADDRESS 2 (OPTIONAL)</label>
          {this.renderInput('addressTwo')}
        </div>
        <button className="next-button" onClick={this.handleNext}>
          NEXT →
        </button>
      </div>
    );
  }
}
