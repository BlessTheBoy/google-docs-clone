import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWRDDo5RGlOpb1FhJNtLaMAhRqdDuj-AU",
  authDomain: "doc-clone-a200e.firebaseapp.com",
  projectId: "doc-clone-a200e",
  storageBucket: "doc-clone-a200e.appspot.com",
  messagingSenderId: "44432208401",
  appId: "1:44432208401:web:89440f51410dbd70ca37b0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
