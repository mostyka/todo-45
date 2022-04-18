// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDElYOC__n1qP8mAd7jVUufnzIhLzFSLU8",
  
    authDomain: "todo-520c6.firebaseapp.com",
  
    projectId: "todo-520c6",
  
    storageBucket: "todo-520c6.appspot.com",
  
    messagingSenderId: "488195392329",
  
    appId: "1:488195392329:web:eb0211d4f5e375d143d098"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const FBFirestoreRef = app.firestore();
//
// export function refData(){
//     return FBFirestoreRef.collection('tasks')
// }

export default getFirestore();