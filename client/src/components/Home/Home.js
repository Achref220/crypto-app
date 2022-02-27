import React from 'react';
import './Home.css';
import vid from '../../videos/homevid.mp4';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <video className="home-vid" autoPlay loop muted id="video">
                    <source src={vid} type="video/mp4" />
                </video>
                <div className='main-title'>
                    <h1>Crypto World</h1>
                    <p>Its the biggest opportunity set we can think of over the next decade</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
