import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey:            "AIzaSyDUIi-M72NT3r8C9yvrCcH5IXUI9tnjy1I",
  authDomain:        "ashajyothi-bf879.firebaseapp.com",
  projectId:         "ashajyothi-bf879",
  messagingSenderId: "936856881769",
  appId:             "1:936856881769:web:c6413f4ae728665c3f70f8",
};

// Cloudinary configs for admin portal uploads
export const cloudinaryConfig = {
  cloudName:    "dshrpij9a",
  uploadPreset: "aj_news_unsigned",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
