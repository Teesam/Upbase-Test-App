import React from 'react';
import './home.css';
import Nav from './nav/nav';
import Footer from './footer/footer';
import Topic from './topic/topic';
import News from './news/news';

const Home = () => {


    return (
        <div className = 'Home'>
            <Nav />
            <div id = 'news-align'>
                <Topic />
                <News />
            </div>
            <Footer />
        </div>
    )
}

export default Home;