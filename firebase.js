import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  projectId: "axiomatic-footing-g07pf",
  appId: "1:585439306528:web:f140638f7eed80ef272d45",
  apiKey: "AIzaSyDvD8z4-lUSeEdg5SVtjUsx7ZXiZtZ0TpI",
  authDomain: "axiomatic-footing-g07pf.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-66685385-cf26-4e4a-a8ca-acc43d78c18b",
  storageBucket: "axiomatic-footing-g07pf.firebasestorage.app",
  messagingSenderId: "585439306528",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
