
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <About />
        <Services/>
      </div>
      
    </div>
  );
}

export default App;
