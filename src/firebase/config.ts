import { getApp, initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {getFunctions} from "firebase/functions"
import { getAuth } from "firebase/auth";
import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectFunctionsEmulator } from 'firebase/functions';
import { connectAuthEmulator  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfrMUwpAVXLRIG4C3ENBWeVcd1oQW3RAk",
  authDomain: "note-app-be725.firebaseapp.com",
  projectId: "note-app-be725",
  storageBucket: "note-app-be725.appspot.com",
  messagingSenderId: "385139230586",
  appId: "1:385139230586:web:a36d52d0e5beac647578c3"
};


initializeApp(firebaseConfig);

export const db = getFirestore()
export const functions = getFunctions(getApp())
export const authApp = getAuth()

if(window.location.hostname === "localhost"){
  connectFirestoreEmulator(db,'localhost',8080)
  connectAuthEmulator(authApp,'http://localhost:9099')
  connectFunctionsEmulator(functions,'localhost',5001)
}

//search data in Db
const colRef = collection(db,"books")

export const dbDatas = await getDocs(colRef)