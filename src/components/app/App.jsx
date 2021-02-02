import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ListPage from '../../views/ListPage/ListPage.jsx';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          component={ListPage}
        />
      </Switch>
    </Router>

  );
}
