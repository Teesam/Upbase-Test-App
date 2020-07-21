import React from 'react';
import './topic.css';
import { Link } from 'react-router-dom';

const Topic = () => {
    return(
        <div className = 'Topic'>
            <ul>
                <h6><Link to = '' className = 'Lister'>Category</Link></h6>
                <li>
                    <Link to = '' className = 'Lister'>Politics</Link>
                </li>
                <li>
                    <Link to = '' className = 'Lister'>Sport</Link>
                </li>
                <li>
                    <Link to = '' className = 'Lister'>Entertainment</Link>
                </li>
                <li>
                    <Link to = '' className = 'Lister'>Religion</Link>
                </li>
                <li>
                    <Link to = '' className = 'Lister'>TV/Series</Link>
                </li>
            </ul>
        </div>
    )
}

export default Topic;