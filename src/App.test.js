import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tabs from './components/Tabs'; // Corrected import path

test('renders tab titles and content', () => {
    render(<Tabs />);

    // Check if tab titles are rendered
    const tab1 = screen.getByText('Tab 1');
    const tab2 = screen.getByText('Tab 2');
    const tab3 = screen.getByText('Tab 3');
    const tab4 = screen.getByText('Tab 4');

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();
    expect(tab4).toBeInTheDocument();

    // Check if initial content is rendered
    const initialContent = screen.getByText(
        /In sint do non adipisicing incididunt excepteur sit/i
    );
    expect(initialContent).toBeInTheDocument();

    // Simulate click on Tab 2
    fireEvent.click(tab2);

    // Check if content changes
    const tab2Content = screen.getByText(
        /Non aliquip fugiat velit ad officia Lorem tempor cillum/i
    );
    expect(tab2Content).toBeInTheDocument();
});

test('renders correct content for each tab', () => {
    render(<Tabs />);

    const tab1 = screen.getByText('Tab 1');
    const tab2 = screen.getByText('Tab 2');
    const tab3 = screen.getByText('Tab 3');
    const tab4 = screen.getByText('Tab 4');

    // Simulate click on Tab 1 and check content
    fireEvent.click(tab1);
    const tab1Content = screen.getByText(
        /In sint do non adipisicing incididunt excepteur sit/i
    );
    expect(tab1Content).toBeInTheDocument();

    // Simulate click on Tab 2 and check content
    fireEvent.click(tab2);
    const tab2Content = screen.getByText(
        /Non aliquip fugiat velit ad officia Lorem tempor cillum/i
    );
    expect(tab2Content).toBeInTheDocument();

    // Simulate click on Tab 3 and check content
    fireEvent.click(tab3);
    const tab3Content = screen.getByText(
        /Deserunt et elit elit ad dolor magna/i
    );
    expect(tab3Content).toBeInTheDocument();

    // Simulate click on Tab 4 and check content
    fireEvent.click(tab4);
    const tab4Content = screen.getByText('Content for Tab 4');
    expect(tab4Content).toBeInTheDocument();
});

test('applies active class to the correct tab', () => {
    render(<Tabs />);

    const tab1 = screen.getByText('Tab 1');
    const tab2 = screen.getByText('Tab 2');

    // Check if Tab 1 is active initially
    expect(tab1).toHaveClass('active');
    expect(tab2).not.toHaveClass('active');

    // Simulate click on Tab 2
    fireEvent.click(tab2);

    // Check if Tab 2 is active now
    expect(tab2).toHaveClass('active');
    expect(tab1).not.toHaveClass('active');
});

test('initial state is correct', () => {
    render(<Tabs />);

    // Check if Tab 1 is active initially
    const tab1 = screen.getByText('Tab 1');
    expect(tab1).toHaveClass('active');

    // Check if initial content is rendered
    const initialContent = screen.getByText(
        /In sint do non adipisicing incididunt excepteur sit/i
    );
    expect(initialContent).toBeInTheDocument();
});