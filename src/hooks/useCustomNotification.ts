import { onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from '../firebase/config';

import { toast } from 'react-toastify';

export function useCustomNotification() {
  useEffect(() => {
    onMessage(messaging, (payload) => {
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          new Notification('Hello!', {
            body: payload.notification?.body,
          });
        } else {
          console.log('Notification permission is not granted.');
        }
      }
      toast(payload.notification?.body);
    });
  }, []);
}
