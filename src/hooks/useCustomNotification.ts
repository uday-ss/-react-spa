import { onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from '../firebase/config';

// if we want to use custom popup for notification, we can use this hook

export function useCustomNotification() {
  useEffect(() => {
    console.log('called');
    onMessage(messaging, () => {
      console.log('working fine ');
    });
  }, []);
}
