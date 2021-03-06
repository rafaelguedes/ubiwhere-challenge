import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from './NotFound';

export default function App() {
  return (
    <Router>
      <div className="mega-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route render={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
