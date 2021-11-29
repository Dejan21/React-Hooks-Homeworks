import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="Nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/albums">Albums</Link></li>
            <li><Link to ="/posts">Posts</Link></li>
        </ul>
    );
};

export default Nav;