import React from "react";

import SmurfList from './SmurfList.js';
import SmurfForm from './SmurfForm.js';
import "./App.css";

const App=()=>{
  //no routes at the moment
  return(
    <div>
      <SmurfList/>
      <SmurfForm/>
    </div>
  )
}

export default App;
