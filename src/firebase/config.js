import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBPd62FsVYdOhaw9qoQWNOgK-nVl5kSXDY",
  authDomain: "chat-app-45a93.firebaseapp.com",
  projectId: "chat-app-45a93",
  storageBucket: "chat-app-45a93.appspot.com",
  messagingSenderId: "949221141335",
  appId: "1:949221141335:web:2f9130ced607983060ac12",
  measurementId: "G-2H6JQYXWLG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
