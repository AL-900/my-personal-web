import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.scss';
import { DataLayerProvider } from './scripts/hooks/dataLayer/useDataLayer';
import intialState from './scripts/hooks/dataLayer/intialState';
import reducer from './scripts/hooks/dataLayer/reducer';

render(
    <React.StrictMode>
        <DataLayerProvider initialState={intialState} reducer={reducer}>
            <App />
        </DataLayerProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
