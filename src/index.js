import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './components/Home';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(React.createElement(Home), document.getElementById('root'));
registerServiceWorker();
