import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

describe('<Button/>', () => {
  it('should render the button with the text', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);

    expect.assertions(2);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toHaveAttribute('class', 'button');

    expect(button).toBeInTheDocument();
  });

  it('should call function on the button', () => {
    const fn = jest.fn();

    render(<Button text="load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disable is true', () => {
    const fn = jest.fn();

    render(<Button text="load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });
});
