import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './style.scss';

// polyfill startsWith for IE
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function startsWithExtend(search, pos) { // eslint-disable-line
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<App />, root);
}
