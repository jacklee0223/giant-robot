import React from 'react';
import './App.css';

import Main from 'components/Main';
import RightSlider from 'components/RightSlider';

export default function App(props) {
  return (
    <div className="app">
      <Main />
      <RightSlider />
    </div>
  );
}
