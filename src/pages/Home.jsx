import React from 'react';
import '../styles/hero.css';
import '../styles/sections.css';

// Import sections (we will create these next)
import Hero from '../sections/Hero';
import Problem from '../sections/Problem';
import Solution from '../sections/Solution';
import Features from '../sections/Features';
import Blockchain from '../sections/Blockchain';
import Users from '../sections/Users';
import Impact from '../sections/Impact';
import Demo from '../sections/Demo';
import CTA from '../sections/CTA';

const Home = () => {
    return (
        <div className="home-page">
            <div id="home">
                <Hero />
            </div>
            <div id="problem">
                <Problem />
            </div>
            <div id="solution">
                <Solution />
            </div>
            <div id="features">
                <Features />
            </div>
            {/* <div id="blockchain">
                <Blockchain />
            </div> */}
            {/* <div id="users">
                <Users />
            </div> */}
            <div id="impact">
                <Impact />
            </div>
            {/* <div id="demo">
                <Demo />
            </div> */}
            {/* <div id="cta">
                <CTA />
            </div> */}
        </div>
    );
};

export default Home;
