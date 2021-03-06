import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ListPage from '../../views/ListPage/ListPage.jsx';
import CharacterDetail from '../../views/CharacterDetail/CharacterDetail.jsx';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          component={ListPage}
        />
        <Route exact path="/details/:name"
          component={CharacterDetail}
        />
      </Switch>

    </Router>

  );
}
