import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
<<<<<<< HEAD
import { initializeApp } from "firebase/app"
import '../public/index.css'
=======
import './index.css'
import { initializeApp } from "firebase/app"
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3



const firebaseConfig = {
  apiKey: "AIzaSyDT417SD68O6Vc3vuCgFwfEsbE2gyPn2IY",
  authDomain: "proyecto-final-coderhous-d8cb0.firebaseapp.com",
  projectId: "proyecto-final-coderhous-d8cb0",
  storageBucket: "proyecto-final-coderhous-d8cb0.appspot.com",
  messagingSenderId: "556241490912",
  appId: "1:556241490912:web:f330d2245f0bb6c2ab1185",
  measurementId: "G-KYWKR96HXV"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)


