import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';
import Router from './component/Router';

import store from './Store.js'

ReactDOM.render(
    <Provider store = {store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)

// 热替换
// if(module.hot) {
//   module.hot.accept('./component', () => {
//     render(Cpt)
//   });
// }