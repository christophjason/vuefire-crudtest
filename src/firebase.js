import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyAguv9dF2A09fOAXNsQIEqI-GEwkpsEx9c",
  authDomain: "nomadic-groove-197509.firebaseapp.com",
  databaseURL: "https://nomadic-groove-197509.firebaseio.com",
  projectId: "nomadic-groove-197509",
  storageBucket: "nomadic-groove-197509.appspot.com",
  messagingSenderId: "5408491407"
});

export const db = app.database();
export const namesRef = db.ref('names');
