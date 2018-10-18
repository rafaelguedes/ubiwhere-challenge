import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='mega-container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail' component={Detail} />
            <Route render={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
