import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js'


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route paht="/" element={<Home/>}/>
    //   </Routes>
    // </Router>
    <div>
      <h1>Voice Assistant</h1>
      <Home />
    </div>
  );
}

export default App;
