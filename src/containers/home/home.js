import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import NewFeeds from '../../components/NewFeeds/NewFeeds';
import SideBar from '../../components/sideBar/sideBar';
import UserHome from '../../components/UserHome/UserHome';
import Widgets from '../../components/Widgets/Widgets';
import { getUserInfo, sendUserInfo } from '../../store/data_actions';
import './home.css';


const Home = () => {
    
    const userData = useSelector((state) => state.auth.userInfo);
    const isSignup = useSelector((state) => state.auth.isSignup);
    const changed = useSelector((state) => state.auth.changed);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSignup) {
            dispatch(sendUserInfo(userData, userData.username))
        } else {
            dispatch(getUserInfo(userData.userId))
        }
    }, []);

    return (
        <div className="Home">
            <SideBar />
                <Switch>
                    <Route path="/home" exact>
                        <NewFeeds />
                    </Route>
                    <Route path={`/${userData.username}`} exact>
                        <UserHome />
                    </Route>
                    <Route path="*">
                        <h2>Loading...</h2>
                    </Route>
                </Switch>
            <Widgets />
        </div>
    );
}
 
export default Home;