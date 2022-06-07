// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcCVksIe9pL5Xu5eapsa6tVVmB-SNe-A4",
  authDomain: "shalom-test.firebaseapp.com",
  projectId: "shalom-test",
  storageBucket: "shalom-test.appspot.com",
  messagingSenderId: "992508425855",
  appId: "1:992508425855:web:6747dcc5da8057075b714a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {db}
export default app