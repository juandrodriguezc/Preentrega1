import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app"



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


