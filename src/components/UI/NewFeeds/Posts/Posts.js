import React from 'react';
import { Avatar } from '@material-ui/core';

import bikiniPic from '../../../../assets/avatar/bikini.jpg';
import './Posts.css';

const Posts = ({
    displayName, 
    userName, 
    verified, 
    text,
    image,
    avatar
}) => {
    return (  
        <div className='posts'>
            <div className="posts_avatar">
                <Avatar src={bikiniPic} />
                <img className="image" src={bikiniPic} />
            </div>
        </div>
    );
}
 
export default Posts;