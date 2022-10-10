//========React========

import ReactDOM from 'react-dom/client';

//========Redux========

import { createStore } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';
import { applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

//========Styles========

import './index.css';

//========Components========

import App from './App';

//###############################################################//

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore( reducers, compose(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
