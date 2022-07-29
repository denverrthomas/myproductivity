// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDiqFKW2dcibkG8H19sfpPWvMVtuaUrDQY',
  authDomain: 'my-productivity-339f0.firebaseapp.com',
  projectId: 'my-productivity-339f0',
  storageBucket: 'my-productivity-339f0.appspot.com',
  messagingSenderId: '124772221794',
  appId: '1:124772221794:web:3144c195fc7243a52ba23b',
  measurementId: 'G-FSCHVXPQ1W'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    app,
    auth,
};