import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCen_tS6AHw4JtcBe-JYuJ7BU35Lbc2bCM",
    authDomain: "r-one-kiosk.firebaseapp.com",
    projectId: "r-one-kiosk",
    storageBucket: "r-one-kiosk.appspot.com",
    messagingSenderId: "715228357603",
    appId: "1:715228357603:web:c104145edbe96608cbb6d6",
    measurementId: "G-JBVR5EK3WT"
  };
  

export const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);
export const firebase_auth=getAuth(firebase_app);