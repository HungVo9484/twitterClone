import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className='widgets_search'>
                <SearchIcon className='widgets_searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>
            <div className="widgets_container">
                <h2>Trends for you</h2>
            </div>
        </div>

    );
}
 
export default Widgets;