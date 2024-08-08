import React, { useEffect, useState } from 'react';
import {
  getNotifications,
  markAsRead,
} from '../../firebase/firestore/notifications';
import { Notification } from '../../types/Notification';

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const notifications = await getNotifications();
      setNotifications(notifications);
    };

    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id);
    setNotifications(
      notifications.map((notify) =>
        notify.id === id ? { ...notify, isRead: true } : notify
      )
    );
  };

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{
              textDecoration: notification.isRead ? 'line-through' : 'none',
            }}
          >
            {notification.message}
            {!notification.isRead && (
              <button onClick={() => handleMarkAsRead(notification.id)}>
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
