import React from 'react';
import ReactDOM from 'react-dom';
import Partners from './Partners';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Partners />, div);
  ReactDOM.unmountComponentAtNode(div);
});