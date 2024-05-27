import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SliderPaginationContainer from '../SliderPaginationContainer';

describe('SliderPaginationContainer', () => {
    test('renders children', () => {
        render(
            <SliderPaginationContainer>
                <div>Slider Content</div>
            </SliderPaginationContainer>
        );
        const contentElement = screen.getByText(/slider content/i);
        expect(contentElement).toBeInTheDocument();
    });

    test('handles next and prev clicks', () => {
        const handleNext = jest.fn();
        const handlePrev = jest.fn();
        render(
            <SliderPaginationContainer onNext={handleNext} onPrev={handlePrev}>
                <div>Slider Content</div>
            </SliderPaginationContainer>
        );

        fireEvent.click(screen.getByText(/Next/i));
        expect(handleNext).toHaveBeenCalledTimes(1);

        fireEvent.click(screen.getByText(/Prev/i));
        expect(handlePrev).toHaveBeenCalledTimes(1);
    });
});
