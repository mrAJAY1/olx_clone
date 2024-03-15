import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDA5fytYjmoDWXLFcuF32CY9uS-MAskqgo",
  authDomain: "olx-clone-75c5c.firebaseapp.com",
  projectId: "olx-clone-75c5c",
  storageBucket: "olx-clone-75c5c.appspot.com",
  messagingSenderId: "809096693683",
  appId: "1:809096693683:web:0315f8bfcad67e839b2dc6"
};

export default firebase.initializeApp(firebaseConfig);
