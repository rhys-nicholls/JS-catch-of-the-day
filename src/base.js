import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWMNZJCGMEFeFZLn-CGahjXRb-sXUsgIs",
  authDomain: "catch-of-the-day-rhys-nicholls.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-rhys-nicholls.firebaseio.com",
  projectId: "catch-of-the-day-rhys-nicholls",
  storageBucket: "catch-of-the-day-rhys-nicholls.appspot.com",
  messagingSenderId: "670140518439"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
