import React from 'react';
import ReactDOM from 'react-dom';
import TeamDetail from './TeamDetail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});