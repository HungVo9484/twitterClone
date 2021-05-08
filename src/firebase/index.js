import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBYN0xEzucqSY7h48Ge6qyE0L6u7LaUjcE",
    authDomain: "twitter-clone1-755c7.firebaseapp.com",
    databaseURL: "https://twitter-clone1-755c7-default-rtdb.firebaseio.com",
    projectId: "twitter-clone1-755c7",
    storageBucket: "twitter-clone1-755c7.appspot.com",
    messagingSenderId: "783518039659",
    appId: "1:783518039659:web:918428173b2049ef0c7b2e"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, firebase as default }