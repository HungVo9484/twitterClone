import { Route } from 'react-router-dom';

import userAuth from './containers/userAuth/UserAuth';
import home from './containers/home/home';
import "./App.css";

const App = () => {
  return (
    <div>
      <Route path="/userAuth" component={userAuth} />
      <Route path="/home" exact component={home} />
      
    </div>
  );
}

export default App;
