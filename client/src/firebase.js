import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
const firebaseConfig = {
  apiKey: "AIzaSyATlobkKl9resDNzxleZ_7HI5GvjXmmpSs",
  authDomain: "react-notifications-28197.firebaseapp.com",
  projectId: "react-notifications-28197",
  storageBucket: "react-notifications-28197.appspot.com",
  messagingSenderId: "269530381880",
  appId: "1:269530381880:web:eaf32139e059bfbf7170cd",
  measurementId: "G-1MNWLZZGK2"
};


initializeApp(firebaseConfig);

const messaging = getMessaging();


export const requestForToken = () => {
    return getToken(messaging, { vapidKey: 'BG-ez7S99iVv3CICkowTtH-9TzouMW4BgAAMjo7ZBTF5oboUznOyas_xLZ38gVdQt2f6euB7JHXSciQKUOK8laA' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });