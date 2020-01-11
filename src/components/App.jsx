import React from 'react';
import './App.css';

import Main from 'components/Main';
import InfoForm from 'components/InfoForm';

export default function App(props) {
  return (
    <div className="app">
      <Main />
      <InfoForm />
    </div>
  );
}
