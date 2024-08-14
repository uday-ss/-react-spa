import { getToken } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from '../firebase/config';
import { setToken } from '../lib/storage';

export function useRequestPermission() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        navigator.serviceWorker
          .register('/firebase-messaging-sw.js')
          .then(async (registration) => {
            await navigator.serviceWorker.ready;
            return getToken(messaging, {
              vapidKey: process.env.REACT_APP_VAP_ID_KEY,
              serviceWorkerRegistration: registration,
            });
          })
          .then(async (currentToken) => {
            if (currentToken) {
              setToken(currentToken);
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
      }
    });
  }, []);
}
