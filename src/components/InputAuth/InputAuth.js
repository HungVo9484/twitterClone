import React from 'react';
import { Route } from 'react-router-dom';

import Logo from '../Logo/Logo';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import InputSelect from './inputSelect/inputSelect';
import './InputAuth.css';

const MainAuth = () => {

    return (
        <div className="InputAuth">
            <Logo />
            <Route path='/userAuth' exact>
                <InputSelect />
            </Route>
            <Route path='/logout' exact>
                <InputSelect />
            </Route>;
            <Route path='/userAuth/signup'>
                <SignUp />
            </Route>
            <Route path='/userAuth/signin'>
                <SignIn />
            </Route>
        </div>
    );
}
 
export default MainAuth;