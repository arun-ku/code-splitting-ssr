import React from 'react';
import { render }  from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom'
import Loadable from 'react-loadable';

import App from './routes';

window.main = () => {
  Loadable.preloadReady().then(() => {
    render(
      <Router>
        <App />
      </Router>,
      document.getElementById('app')
    )
  });
};

//
// if (module.hot) {
//     module.hot.accept('./Components/App', () => {
//         const NextApp = require('./Components/App').default;
//         render(
//             <AppContainer>
//                 <NextApp/>
//             </AppContainer>,
//             document.getElementById('app')
//         );
//     })
// }