// test
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOoG74xQq-wa_mjgidq6gM_olDyHgHA4g",
  authDomain: "placename-guesser.firebaseapp.com",
  projectId: "placename-guesser",
  storageBucket: "placename-guesser.appspot.com",
  messagingSenderId: "136146579197",
  appId: "1:136146579197:web:a46e28128dc514e71c9894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db