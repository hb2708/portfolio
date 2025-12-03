import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Awards from './Awards';
import Projects from './Projects';
import Writing from './Writing';

import { NAVBAR_HEIGHT } from '../constants';

const Home = () => {
    const location = useLocation();
    const navType = useNavigationType();

    useLayoutEffect(() => {
        if (navType !== 'POP' && location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offset = NAVBAR_HEIGHT; // Height of the navbar
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'instant'
                });
            }
        }
    }, [location, navType]);

    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Writing />
            <Awards />
        </main>
    );
};

export default Home;
