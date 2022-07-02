import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAvWb85BiTukLT0iggcvg129Th4drYJXuM",
  authDomain: "deft-station-353409.firebaseapp.com",
  projectId: "deft-station-353409",
  storageBucket: "deft-station-353409.appspot.com",
  messagingSenderId: "473348095495",
  appId: "1:473348095495:web:4d25444bc2ff751fbbf4a2",
  measurementId: "G-YSPE9D8TCZ",
};

export default firebase.initializeApp(firebaseConfig);
