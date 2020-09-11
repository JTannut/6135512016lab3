import React from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
import Wordcard from './WordCard';

function App() {
  return (
    // <div>
    // <CharacterCard value="h"/>
    // <CharacterCard value="i"/>
    // </div>
    <div>
      <Wordcard value="6135512016"/>

    </div>
//     <div>
//   {
//     Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
//   }
//  </div>

    //<div>
    //<WordCard value="hello"/>
   // </div>
  );
}

export default App;
