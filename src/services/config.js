import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "summo-store.firebaseapp.com",
  projectId: "summo-store",
  storageBucket: "summo-store.firebasestorage.app",
  messagingSenderId: "454578913948",
  appId: "1:454578913948:web:d4a3353391ca539f0ca359"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
