import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import exportedStoreObject from './redux/store';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={exportedStoreObject.store}>
        <PersistGate loading={null} persistor={exportedStoreObject.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}


/*const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={exportedStoreObject.store}>
        <PersistGate loading={null} persistor={exportedStoreObject.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error('Failed to find the root element');
}*/
