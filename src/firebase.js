import firebase from 'firebase';

const firebaseConfig = {...}; // copy firebase SDK snipet here

const firebaseApp = firebase.inittializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;