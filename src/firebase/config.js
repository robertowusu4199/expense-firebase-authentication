import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA-Oy0B0i55h_02u3xBiTvckoisInSjUfw",
  authDomain: "expense-tracker-3d4d9.firebaseapp.com",
  projectId: "expense-tracker-3d4d9",
  storageBucket: "expense-tracker-3d4d9.appspot.com",
  messagingSenderId: "293524976909",
  appId: "1:293524976909:web:864aa982c5693de29eec44",
  measurementId: "G-B5K637NTBB"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;