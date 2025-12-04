import { useLayoutEffect, lazy, Suspense } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Hero from './Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Experience = lazy(() => import('./Experience'));
const Awards = lazy(() => import('./Awards'));
const Projects = lazy(() => import('./Projects'));
const Writing = lazy(() => import('./Writing'));

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
            <Suspense fallback={<div className="min-h-screen" />}>
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Writing />
                <Awards />
            </Suspense>
        </main>
    );
};

export default Home;
