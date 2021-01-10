import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="col-md-2">
            <ul>
                <li>
                    <div className="nav_btn">
                        <Link to = {'/'}>List Posts</Link>
                    </div>
                </li>
                <li>
                    <div className="nav_btn">
                        <Link to = {'/create'}>Add Post</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
