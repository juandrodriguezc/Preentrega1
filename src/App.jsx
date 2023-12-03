import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const condition= false
  if (condition) {
    console.log("hello world");
   } else{
      console.log("Hello none");
    }

  return (
    <div>
      {condition ? <h1>Verdadero</h1> : <h1>Falso</h1>

      }
      <h1>Hello world </h1>
      <p>show</p>
    </div>
  );
    }
    
    export default App;
