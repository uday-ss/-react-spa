import { onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from '../firebase/config';

export function useCustomNotification() {
  useEffect(() => {
    onMessage(messaging, () => {
      // implement custom popup for notification
    });
  }, []);
}
