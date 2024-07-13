import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCBgfPI8zkMfB2ek-RWWwHPUI0eOmEPJ94",
//     authDomain: "happiness-backend-9a369.firebaseapp.com",
//     projectId: "happiness-backend-9a369",
//     storageBucket: "happiness-backend-9a369.appspot.com",
//     messagingSenderId: "763781917858",
//     appId: "1:763781917858:web:f35f27e8ded815ce1ebbfb"
// };
const firebaseConfig = {
    apiKey: "AIzaSyBpfuM166XEp2mLXI2S8CV8C9InuTP_SXw",
    authDomain: "happinessapp1-ea443.firebaseapp.com",
    projectId: "happinessapp1-ea443",
    storageBucket: "happinessapp1-ea443.appspot.com",
    messagingSenderId: "522038902274",
    appId: "1:522038902274:web:9f6640657287090286f11b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
export { auth };