import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../Projects';

describe('Projects Component', () => {
    const renderProjects = () => {
        return render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        );
    };

    it('renders section title', () => {
        renderProjects();
        expect(screen.getByText(/Selected Works/i)).toBeInTheDocument();
    });

    it('renders all project cards', () => {
        renderProjects();
        expect(screen.getByText(/MoneyLion App/i)).toBeInTheDocument();
        expect(screen.getByText(/Pop Meals Rider App/i)).toBeInTheDocument();
        expect(screen.getByText(/Pop Meals Customer App/i)).toBeInTheDocument();
    });

    it('renders project links', () => {
        renderProjects();
        // Check for App Store and Play Store links
        const appStoreLinks = screen.getAllByLabelText(/App Store/i);
        const playStoreLinks = screen.getAllByLabelText(/Google Play Store/i);

        expect(appStoreLinks.length).toBeGreaterThan(0);
        expect(playStoreLinks.length).toBeGreaterThan(0);
    });

    it('renders tech stack badges', () => {
        renderProjects();
        // Use getAllByText since tech stacks appear multiple times across projects
        const reactNativeBadges = screen.getAllByText(/React Native/i);
        const iosBadges = screen.getAllByText(/iOS/i);
        const designSystemsBadges = screen.getAllByText(/Design Systems/i);

        expect(reactNativeBadges.length).toBeGreaterThan(0);
        expect(iosBadges.length).toBeGreaterThan(0);
        expect(designSystemsBadges.length).toBeGreaterThan(0);
    });
});
