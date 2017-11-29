import React from 'react';
// import App from './Components/App';
// import Info from './Components/Info';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';

const App = Loadable({
  loader: () => import('./Components/App'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  },
  delay: 2000,
});

const Info = Loadable({
  loader: () => import('./Components/Info'),
  loading: function Loading(props) {
    if (props.error) {
      return <div>Error!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  },
  delay: 2000,
});

export const routes = [
  {
    path: '/',
    component: App,
    exact: true,
  },{
    path: '/info/:postId',
    component: Info,
  }
];

export default () => (
  <Switch>
    {routes.map((route, index) => <Route key={index} {...route} />)}
  </Switch>
);