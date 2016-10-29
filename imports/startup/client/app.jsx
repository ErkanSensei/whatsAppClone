import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'
import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';

import routes from '../../router/routes.js';
import MainLayout from '../../ui/containers/MainLayout.jsx';

const rootRoute = {
  component: MainLayout,
  childRoutes: routes,
};

Meteor.startup(() => {
    render ((
      <Router history={browserHistory} routes={rootRoute} />,
    ),document.getElementById('app')
)

});
