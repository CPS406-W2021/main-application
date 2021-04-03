import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './store/firebase/Root';
import './css/main.scss';
ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root'),
);
