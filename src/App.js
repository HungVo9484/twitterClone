import { Route, Switch, Redirect } from 'react-router-dom';

import UserAuth from './containers/userAuth/UserAuth';
import Home from './containers/home/home';
import "./App.css";

const App = () => {

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/userAuth" />
      </Route>
      <Route path="/userAuth">
        <UserAuth />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="*">
        <h2>Page Not Found</h2>
      </Route>
    </Switch>
  );
}

export default App;
