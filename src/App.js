import React from 'react';
import './App.css';
import Clocker from './Clocker';
import Orange from './orange.png';

function App() {
  const myStyle = {
    backgroundImage: `url(${ Orange })`,
    top: `0`,  
    height: `100%`,
    width: `100%`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,

  }

  return (
    <div className="App" style={ myStyle }>
      <Clocker />
    </div>
  );
}

export default App;
