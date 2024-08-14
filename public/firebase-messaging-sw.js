/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
);

const config = {
  apiKey: 'AIzaSyDxZyTT6lSJf869ZGgMzGDSMkHG3YqVWVM',
  authDomain: 'react-spa-typescript-14467.firebaseapp.com',
  projectId: 'react-spa-typescript-14467',
  storageBucket: 'react-spa-typescript-14467.appspot.com',
  messagingSenderId: '550486223429',
  appId: '1:550486223429:web:1c109debddd19011f9d12c',
};

// replace with your firebase config key
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = 'Hello!';
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
