import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import Tooltip from '../../UI/Tooltip/Tooltip';
// import { deleteUsersInfo, readUsersInfo } from '../../../lib/api';

import './Header.css';

const Header = () => {

    const history = useHistory();

    const goBackHandler = () => {
        history.goBack();
    };

    return (
        <>
            <div className="userHeader" >
                <Tooltip title="Back" margin="-32%">
                    <ArrowBackOutlinedIcon onClick={goBackHandler}/>
                </Tooltip>
                <h2>Display Name</h2>
            </div>
        </>
    );
}
 
export default Header;