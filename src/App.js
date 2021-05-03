import { Fragment, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import UserAuth from './containers/userAuth/UserAuth';
import Home from './containers/home/home';
import { authCheckState } from './store/auth_actions';
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.ui.isAuth);
  const checkAuthStateCompleted = useSelector((state) => state.ui.checkAuthStateCompleted);

  useEffect(() => {
    dispatch(authCheckState())
  }, [dispatch])

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/userAuth" />
      </Route>
      <Route path="/userAuth">
        <UserAuth />
      </Route>
      <Route path="/logout">
        <UserAuth />
      </Route>
      <Route path="*">
        <Redirect to="/userAuth" />
      </Route>
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        {/* <Route path="/home" exact>
          <Home />
        </Route> */}
        <Route path="/:userName">
          <Home />
        </Route>
        <Route path="*">
          <h2>Loading...</h2>
        </Route>
      </Switch>
    );
  };
  return (
    <Fragment>
      {checkAuthStateCompleted ? routes : <p>Loading...</p>}
    </Fragment>
  );
}

export default App;
