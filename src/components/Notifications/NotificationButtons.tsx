import React from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';

import Button from '../Button/Button';
import { getToken } from '../../lib/storage';

const NotificationButtons: React.FC = () => {
  const handleButtonClick = async (message: string) => {
    const functions = getFunctions();
    const sendNotification = httpsCallable(functions, 'sendNotification');

    try {
      const token = getToken();
      await sendNotification({
        token: token,
        title: 'Notification',
        body: message,
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <>
      <Button
        text="Notification Button 1"
        onClick={() => handleButtonClick('Notification 1')}
      />
      <Button
        text="Notification Button 2"
        onClick={() => handleButtonClick('Notification 2')}
      />
      <Button
        text="Notification Button 3"
        onClick={() => handleButtonClick('Notification 3')}
      />
    </>
  );
};

export default NotificationButtons;
