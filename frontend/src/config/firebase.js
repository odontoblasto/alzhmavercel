import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdMZCKZ5IEw7hpLgHDhFP5kFOai_Vyh5Q",
  authDomain: "the-alzhma-project.firebaseapp.com",
  projectId: "the-alzhma-project",
  storageBucket: "the-alzhma-project.appspot.com",
  messagingSenderId: "818894872487",
  appId: "1:818894872487:web:5a526b5869a026ec20a082",
  measurementId: "G-33455PDK1N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();