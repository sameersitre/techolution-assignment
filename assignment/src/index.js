import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '././_components/NavBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
