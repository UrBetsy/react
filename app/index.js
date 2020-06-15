import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Router from './component/Router';

ReactDOM.render(
    <Router />,
    document.getElementById('root')
)

// 热替换
// if(module.hot) {
//   module.hot.accept('./component', () => {
//     render(Cpt)
//   });
// }