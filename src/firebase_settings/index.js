import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTtPyCz28SMwQuiv-px_b1qnUxENcS5Pk",
    authDomain: "vue-firebase-test-dc111.firebaseapp.com",
    projectId: "vue-firebase-test-dc111",
    storageBucket: "vue-firebase-test-dc111.appspot.com",
    messagingSenderId: "720593075166",
    appId: "1:720593075166:web:e80df66381c8718437fb4f",
    measurementId: "G-40K713QE16"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Authentication
const auth = getAuth()

export default { analytics, db, auth };