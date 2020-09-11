import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      Hello World
      </div>
      <div>
     <CharacterCard value="h"/>
    <CharacterCard value="i"/>
      </div>
        <a>
          T.Tannut 6135512016
        </a>
      </header>
    </div>

  );
}

export default App;
