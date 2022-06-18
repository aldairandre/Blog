import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getFunctions} from "firebase/functions"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfrMUwpAVXLRIG4C3ENBWeVcd1oQW3RAk",
  authDomain: "note-app-be725.firebaseapp.com",
  projectId: "note-app-be725",
  storageBucket: "note-app-be725.appspot.com",
  messagingSenderId: "385139230586",
  appId: "1:385139230586:web:a36d52d0e5beac647578c3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const functions = getFunctions(getApp())
export const authApp = getAuth()