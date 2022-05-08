import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID

  // apiKey: "AIzaSyD4sxy04XR_3kcD4oqCSf8erVdSIJHw90k",
  // authDomain: "warehouse-techsolution.firebaseapp.com",
  // projectId: "warehouse-techsolution",
  // storageBucket: "warehouse-techsolution.appspot.com",
  // messagingSenderId: "709703709517",
  // appId: "1:709703709517:web:d7d44145c350f6377cfd04"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;