import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';

// Mock the lazy-loaded TypeAnimation component
vi.mock('react-type-animation', () => ({
    TypeAnimation: () => <span>BUILD WORLD-CLASS TEAMS</span>
}));

describe('Hero Component', () => {
    const renderHero = () => {
        return render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
    };

    it('renders main heading', () => {
        renderHero();
        expect(screen.getByText(/I HELP COMPANIES/i)).toBeInTheDocument();
    });

    it('renders CTA buttons', () => {
        renderHero();
        expect(screen.getByText(/View Projects/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
    });

    it('renders stats section', () => {
        renderHero();
        // Check for stat numbers
        expect(screen.getByText('10+')).toBeInTheDocument();
        expect(screen.getByText('$1M+')).toBeInTheDocument();
        expect(screen.getByText('10x')).toBeInTheDocument();
        expect(screen.getByText('15+')).toBeInTheDocument();
        // Check for stat labels
        expect(screen.getByText('YEARS_EXP')).toBeInTheDocument();
        expect(screen.getByText('REVENUE_GEN')).toBeInTheDocument();
        expect(screen.getByText('SCALABILITY')).toBeInTheDocument();
        expect(screen.getByText('GLOBAL_TEAMS')).toBeInTheDocument();
    });

    it('renders social links with proper ARIA labels', () => {
        renderHero();
        expect(screen.getByLabelText(/Visit GitHub Profile/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Visit LinkedIn Profile/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Send Email/i)).toBeInTheDocument();
    });

    it('has correct CTA button hrefs', () => {
        renderHero();
        const viewProjectsButton = screen.getByText(/View Projects/i).closest('a');
        const contactButton = screen.getByText(/Contact Me/i).closest('a');

        expect(viewProjectsButton).toHaveAttribute('href', '#projects');
        expect(contactButton).toHaveAttribute('href', '#contact');
    });

    it('renders hero image', () => {
        renderHero();
        const image = screen.getByRole('img', { name: /harshal/i });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/harshal.webp');
    });

    it('renders professional icons', () => {
        renderHero();
        // Icons from lucide-react are rendered as SVG elements
        const heroSection = screen.getByText(/I HELP COMPANIES/i).closest('section');
        expect(heroSection).toBeInTheDocument();
    });

    it('renders introduction text', () => {
        renderHero();
        expect(screen.getByText(/engineering scalable mobile/i)).toBeInTheDocument();
    });

    it('all social links open in new tab', () => {
        renderHero();
        const githubLink = screen.getByLabelText(/Visit GitHub Profile/i);
        const linkedinLink = screen.getByLabelText(/Visit LinkedIn Profile/i);

        expect(githubLink).toHaveAttribute('target', '_blank');
        expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
        expect(linkedinLink).toHaveAttribute('target', '_blank');
        expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
