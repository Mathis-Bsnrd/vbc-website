import React from 'react';
import ReactDOM from 'react-dom';
import NewsDetail from './NewsDetail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});