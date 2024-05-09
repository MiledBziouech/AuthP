import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyB9bpfKCenYYwOSDiR1vfzLiqQnK4qITGk",
  authDomain: "profit-fc969.firebaseapp.com",
  projectId: "profit-fc969",
  storageBucket: "profit-fc969.appspot.com",
  messagingSenderId: "130894151484",
  appId: "1:130894151484:web:2be813310becd5c63c2839",
  measurementId: "G-ZVRWMW2XFR"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { db, auth };