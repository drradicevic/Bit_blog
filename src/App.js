import React, { useEffect } from "react";
import { getUsers } from "./services/fetchAPI"

import './App.css';

function App() {
  useEffect(()=> {
    getUsers()
  }
  )
  return (
   <p>Hello World!</p>
  );
}

export default App;
