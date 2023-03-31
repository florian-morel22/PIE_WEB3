import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6FH4zaQx6cMLSVOy5aLUCDDK0f4XrQ5o",
  authDomain: "pie-web3-a9768.firebaseapp.com",
  projectId: "pie-web3-a9768",
  storageBucket: "pie-web3-a9768.appspot.com",
  messagingSenderId: "760110313257",
  appId: "1:760110313257:web:92c6c4e2625afadb3a5138",
  measurementId: "G-1ZZHPJJDCZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);