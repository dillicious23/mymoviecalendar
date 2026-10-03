importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBbBFyGfNfx_NWA07YS-7G_RlDcq71bSk4",
  authDomain: "movie-calendar-9137f.firebaseapp.com",
  projectId: "movie-calendar-9137f",
  storageBucket: "movie-calendar-9137f.firebasestorage.app",
  messagingSenderId: "1064087031521",
  appId: "1:1064087031521:web:c3d5bac65b0587138031a0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification here
  const notificationTitle = payload.notification?.title || 'My Movie Calendar';
  const notificationOptions = {
    body: payload.notification?.body || 'New message!',
    icon: '/favicon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
