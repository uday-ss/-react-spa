import { onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from '../firebase/config';

import { toast } from 'react-toastify';

export function useCustomNotification() {
  useEffect(() => {
    onMessage(messaging, (payload) => {
      toast(payload.notification?.body);
    });
  }, []);
}
