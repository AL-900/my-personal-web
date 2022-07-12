import React from 'react';
import AboutMe from './homeComponents/AboutMe';
import Banner from './homeComponents/Banner';
import Company from './homeComponents/Company';
import GetStarted from './homeComponents/GetStarted';

function Home() {
    return (
        <section className="Home">
            <Banner />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="rgb(0, 0, 70)"
                    fillOpacity="1"
                    d="M0,0L48,10.7C96,21,192,43,288,85.3C384,128,480,192,576,224C672,256,768,256,864,224C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </svg>
            <AboutMe />
            <Company />
            <GetStarted />
        </section>
    );
}

export default Home;
