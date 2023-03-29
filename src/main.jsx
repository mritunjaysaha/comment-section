import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout/Layout';
import { store } from './redux/store/store';
import './styles/index.scss';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout />
        </Provider>
    </React.StrictMode>,
);
