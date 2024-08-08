import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders the button with the correct text', () => {
    const handleClick = jest.fn();
    render(<Button onClick={() => handleClick} text="Click Me" />);

    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} text="Click Me" />);
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
