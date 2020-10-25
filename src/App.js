import React from 'react';
import routes from './routes';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Userdata from './Pages/Userdata';
import Usersummary from './Pages/Usersummary';
import Header from './Components/Header';

function App() {
  return (
<div className="App row">
<div className="col-2">
      <Header />
      </div>
      <div className="col-10 mt-3">
      <Switch>
        <Route path={routes.userdata}>
        <Userdata />
        </Route>
        
        <Route path={routes.usersummary}>
          <Usersummary />
        </Route>
        
        <Route path={routes.home}>
        <Home />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
