import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from 'views/Home';
import './assets/scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
