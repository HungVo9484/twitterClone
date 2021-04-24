import React from 'react';
import { Avatar } from '@material-ui/core';
import { VerifiedUser, ChatBubbleOutline, Repeat, FavoriteBorder, Publish } from '@material-ui/icons';

import bikiniPic from '../../../assets/avatar/bikini.jpg';
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
        <div className='post'>
            <div className="post_avatar">
                <Avatar src={bikiniPic} />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <strong>HungVo</strong>{" "}
                        <span className='post_headerSpecial'>
                            <VerifiedUser className='post_verified' />
                            <span>@voduyhung</span>
                        </span>
                    </div>
                    
                    <div className='post_headerDescription'>
                        <p> Describe something</p>
                    </div>
                    <img className='image' src={bikiniPic} alt='' />
                    <div className='post_footer'>
                        <ChatBubbleOutline fontSize='small' />
                        <Repeat fontSize='small' />
                        <FavoriteBorder fontSize='small' />
                        <Publish fontSize='small' />
                    </div>
                </div>
            </div>    
        </div>
    );
}
 
export default Posts;