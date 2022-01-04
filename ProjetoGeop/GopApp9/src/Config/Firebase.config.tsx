/* eslint-disable prettier/prettier */

//import firebase from 'firebase';
import firebase from 'firebase/app';
import {getFirestore} from 'firestore/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDw6ZBUzGQY87RGYmQjg6ODj_CFl9BQGxY',
  authDomain: 'geopapp6.firebaseapp.com',
  projectId: 'geopapp6',
  storageBucket: 'geopapp6.appspot.com',
  messagingSenderId: '904354602539',
  appId: '1:904354602539:web:218a3f2782330a081c946e',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const appDatabase= firebase.firestore()
export default appDatabase;
