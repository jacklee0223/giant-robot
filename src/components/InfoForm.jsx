import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import './InfoForm.css';

export default class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      addressTwo: '',
      requiredFields: ['firstName', 'lastName', 'address'],
      missingRequiredFields: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { missingRequiredFields, requiredFields } = this.state;

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
    const {
      firstName,
      lastName,
      address,
      addressTwo,
      missingRequiredFields
    } = this.state;
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

    if (hasAllRequired) {
      alert(
        `Name: ${firstName} ${lastName}\nAddress: ${address} ${addressTwo}`
      );
    }
  };

  formatLabel = inputName => {
    const { requiredFields } = this.state;
    const optionalString = !_.includes(requiredFields, inputName)
      ? ' (OPTIONAL)'
      : '';
    const formattedLabel = `${_.startCase(
      inputName
    ).toUpperCase()}${optionalString}`;

    return formattedLabel;
  };

  renderInput = inputName => {
    const { missingRequiredFields } = this.state;
    console.log(missingRequiredFields, inputName);

    return (
      <Fragment>
        <label>
          {this.formatLabel(inputName)}{' '}
          {_.includes(missingRequiredFields, inputName) ? (
            <p className="required">REQUIRED</p>
          ) : (
            ''
          )}
        </label>
        <input
          className={`${this.state[inputName].length > 0 ? 'has-input' : ''} ${
            _.includes(missingRequiredFields, inputName)
              ? 'required-missing'
              : ''
          }`}
          onChange={e => this.onInputChange(e, inputName)}
        />
      </Fragment>
    );
  };

  render() {
    const { missingRequiredFields } = this.state;

    return (
      <div className="info-form">
        <div className="label-input-container">
          <label>
            {_.includes(missingRequiredFields, 'firstName' ? 'Required' : '')}
          </label>
          {this.renderInput('firstName')}
        </div>
        <div className="label-input-container">
          {this.renderInput('lastName')}
        </div>
        <div className="label-input-container">
          {this.renderInput('address')}
        </div>
        <div className="label-input-container">
          {this.renderInput('addressTwo')}
        </div>
        <button className="next-button" onClick={this.handleNext}>
          NEXT →
        </button>
      </div>
    );
  }
}
