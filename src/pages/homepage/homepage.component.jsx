import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className="homePage">
        <div className="directory-menu">
            <Directory />
        </div>
    </div>
)

export default HomePage;