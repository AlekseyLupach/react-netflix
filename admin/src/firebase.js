import firebase from "firebase/app";
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyADjymgiVSV4b6h9BDsgdG36ALC0BxmvYI",
  authDomain: "react-netflix-e225c.firebaseapp.com",
  projectId: "react-netflix-e225c",
  storageBucket: "react-netflix-e225c.appspot.com",
  messagingSenderId: "395385217945",
  appId: "1:395385217945:web:813d0d54783610f5526908",
  measurementId: "G-1BXKVXYKB0",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
