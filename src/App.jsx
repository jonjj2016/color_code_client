import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Modules/Store';
import Root from './Views/index';
import { ConnectedRouter } from 'connected-react-router';
import history from './Utils/History';

const renderApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
const App = () => {
  return <React.Fragment> {renderApp()}</React.Fragment>;
};

export default App;
