import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NotificationList from './NotificationList';
import {
  getNotifications,
  markAsRead,
} from '../../firebase/firestore/notifications';
import { Notification } from '../../types/Notification';

jest.mock('../../firebase/firestore/notifications');

const mockedGetNotifications = getNotifications as jest.MockedFunction<
  typeof getNotifications
>;
const mockedMarkAsRead = markAsRead as jest.MockedFunction<typeof markAsRead>;

describe('NotificationList', () => {
  beforeEach(() => {
    mockedGetNotifications.mockResolvedValue([
      { id: '1', message: 'First notification', isRead: false },
      { id: '2', message: 'Second notification', isRead: true },
    ] as Notification[]);
  });

  test('renders notifications and allows marking them as read', async () => {
    render(<NotificationList />);

    expect(await screen.findByText('First notification')).toBeInTheDocument();
    expect(screen.getByText('Second notification')).toBeInTheDocument();

    const markAsReadButton = screen.getByText('Mark as Read');
    expect(markAsReadButton).toBeInTheDocument();

    fireEvent.click(markAsReadButton);

    mockedMarkAsRead.mockResolvedValueOnce(undefined);

    expect(mockedMarkAsRead).toHaveBeenCalledWith('1');

    await waitFor(() => {
      expect(screen.queryByText('Mark as Read')).not.toBeInTheDocument();
    });
  });

  test("does not show 'Mark as Read' button for already read notifications", async () => {
    render(<NotificationList />);

    expect(await screen.findByText('Second notification')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems[1]).not.toContainElement(
      screen.queryByText('Mark as Read', { selector: 'button' })
    );
  });
});
