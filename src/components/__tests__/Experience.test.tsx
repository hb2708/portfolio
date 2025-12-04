import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../Experience';

describe('Experience Component', () => {
    const renderExperience = () => {
        return render(<Experience />);
    };

    it('renders section title', () => {
        renderExperience();
        expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    });

    it('renders all companies', () => {
        renderExperience();
        expect(screen.getByText(/MoneyLion/i)).toBeInTheDocument();
        expect(screen.getByText(/Pop Meals/i)).toBeInTheDocument();
        expect(screen.getByText(/UMAI Restaurant Software/i)).toBeInTheDocument();
    });

    it('renders job roles', () => {
        renderExperience();
        expect(screen.getByText(/Staff Engineer/i)).toBeInTheDocument();
        expect(screen.getByText(/Senior iOS Software Engineer/i)).toBeInTheDocument();
    });

    it('renders tech stack badges', () => {
        renderExperience();
        const reactNativeBadges = screen.getAllByText(/React Native/i);
        const iosBadges = screen.getAllByText(/iOS/i);
        expect(reactNativeBadges.length).toBeGreaterThan(0);
        expect(iosBadges.length).toBeGreaterThan(0);
    });
});
