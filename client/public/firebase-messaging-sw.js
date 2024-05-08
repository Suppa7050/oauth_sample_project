importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyATlobkKl9resDNzxleZ_7HI5GvjXmmpSs",
    authDomain: "react-notifications-28197.firebaseapp.com",
    projectId: "react-notifications-28197",
    storageBucket: "react-notifications-28197.appspot.com",
    messagingSenderId: "269530381880",
    appId: "1:269530381880:web:eaf32139e059bfbf7170cd",
    measurementId: "G-1MNWLZZGK2"
  };
  


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});