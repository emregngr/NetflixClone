import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCP-trNTJZOj6f6LYDfAS6ogReiJkSI4zY",
  authDomain: "netflixclone-9fe80.firebaseapp.com",
  projectId: "netflixclone-9fe80",
  storageBucket: "netflixclone-9fe80.appspot.com",
  messagingSenderId: "499241694044",
  appId: "1:499241694044:web:44c6d09275b0f1d50c4799",
  measurementId: "G-PQX83GV4L1"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;