import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Components/config/routes';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './styles/main.css';
ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
