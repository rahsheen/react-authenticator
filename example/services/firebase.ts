import firebase from "firebase/app/dist/index.cjs";
import "firebase/auth/dist/index.cjs";

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyA714cB9FYzxMnBa1DXEfbnrFeSxHDpOjM',
  authDomain: 'react-native-auth-a222b.firebaseapp.com',
  databaseURL: 'https://react-native-auth-a222b.firebaseio.com',
  projectId: 'react-native-auth-a222b',
  storageBucket: 'react-native-auth-a222b.appspot.com',
  messagingSenderId: '270065831633',
  appId: '1:270065831633:web:71cc8fab200e0279b7bff0',
};

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

const firebaseApp = firebase.initializeApp(config);

export { firebase, firebaseApp, config as firebaseConfig };
