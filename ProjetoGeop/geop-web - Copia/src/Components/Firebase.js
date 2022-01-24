// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQYHL4oPymxs3poeCgx-HHr8lk5LdgmMQ",
  authDomain: "geopapp-64f45.firebaseapp.com",
  databaseURL: "https://geopapp-64f45-default-rtdb.firebaseio.com",
  projectId: "geopapp-64f45",
  storageBucket: "geopapp-64f45.appspot.com",
  messagingSenderId: "230556422993",
  appId: "1:230556422993:web:26250957749d13cde87970",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase= getFirestore(app)

export default firebase