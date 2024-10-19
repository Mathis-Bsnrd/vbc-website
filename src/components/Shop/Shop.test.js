import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './Shop';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shop />, div);
  ReactDOM.unmountComponentAtNode(div);
});