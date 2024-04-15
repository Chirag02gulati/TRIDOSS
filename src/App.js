// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import Counter from './Counter'
// function App() {
//  return (
//  <div classname="App">
//  <Counter/>

//  </div>
//  );}

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import Health from './Health';
import Eduction from './Eduction';
import Enviourment from './Enviourment';
import Community from './community';
import './stylee.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Eduction" element={<Eduction/>} />
        <Route path="/Enviourment" element={<Enviourment/>} />
        <Route path="/community" element={<Community/>} />
      </Routes>
    </Router>
  );
}

export default App;
