import React from 'react';
import ReactDOM from 'react-dom';
import Planning from './Planning';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Planning />, div);
  ReactDOM.unmountComponentAtNode(div);
});