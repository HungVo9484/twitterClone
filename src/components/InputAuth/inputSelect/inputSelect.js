import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Button/Button';

const inputSelect = () => {
    return (
        <Fragment>
            <div className="Title">What's happening?</div>
            <div className="Label">Joining Twitter today</div>
            <div className="button">
                <Link to='/userAuth/signup'>
                    <Button btnType="SignUp">SignUp</Button>
                </Link>
                <Link to='/userAuth/signin'>
                    <Button btnType="signIn">SignIn</Button>
                </Link>
            </div>
        </Fragment>
    );
}

export default inputSelect;