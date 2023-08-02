// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD4O0ZsPXMH1fJXjJpFDR0pwFADlpA5xzs",
	authDomain: "project-with-mentor-8ff96.firebaseapp.com",
	projectId: "project-with-mentor-8ff96",
	storageBucket: "project-with-mentor-8ff96.appspot.com",
	messagingSenderId: "549787444936",
	appId: "1:549787444936:web:1fb3bc6c9114d5bbb767fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
