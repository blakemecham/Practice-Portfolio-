import React from 'react';
import {NavLink} from 'react-router-dom';

export default function() {
    return (
        <div className='navwrapper'>
            <div className='navwrappersLeft'>
                <NavLink exact to='/'>
                    Home Page
                </NavLink>
            </div>
            <div className='navwrappersLeft'>
                <NavLink exact to='/workHistory'>
                    Work History
                </NavLink>
            </div>
            <div className='navwrappersLeft'>
                <NavLink exact to='/education'>
                    Education
                </NavLink>
            </div>
            <div className='navwrappersRight'> 
                <a target='_blank' href='https://www.linkedin.com/in/blakealanmecham/'>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className='navwrappersRight'>
                <a target='_blank' href='https://github.com/blakemecham'>
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
}