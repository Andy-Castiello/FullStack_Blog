//========React========

import ReactDOM from 'react-dom/client';

//========Redux========

import { Provider } from 'react-redux';
import { store } from "./store/app/store";

//========Styles========

import './index.css';

//========Components========

import App from './App';

//###############################################################//

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
