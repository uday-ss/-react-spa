import { render, screen, fireEvent } from '@testing-library/react';
import NotificationButtons from './NotificationButtons';
import { addNotification } from '../../firebase/firestore/notifications';

jest.mock('../../firebase/firestore/notifications', () => ({
  addNotification: jest.fn(),
}));

describe('NotificationButtons', () => {
  test('calls addNotification with correct message when buttons are clicked', async () => {
    render(<NotificationButtons />);

    const button1 = screen.getByText('Notification Button 1');
    const button2 = screen.getByText('Notification Button 2');
    const button3 = screen.getByText('Notification Button 3');

    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);

    expect(addNotification).toHaveBeenCalledTimes(3);
    expect(addNotification).toHaveBeenCalledWith('Notification 1');
    expect(addNotification).toHaveBeenCalledWith('Notification 2');
    expect(addNotification).toHaveBeenCalledWith('Notification 3');
  });
});
