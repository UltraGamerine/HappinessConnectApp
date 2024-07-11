import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBgfPI8zkMfB2ek-RWWwHPUI0eOmEPJ94",
    authDomain: "happiness-backend-9a369.firebaseapp.com",
    projectId: "happiness-backend-9a369",
    storageBucket: "happiness-backend-9a369.appspot.com",
    messagingSenderId: "763781917858",
    appId: "1:763781917858:web:f35f27e8ded815ce1ebbfb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
export { auth };