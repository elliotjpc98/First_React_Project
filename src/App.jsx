
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import { useState } from 'react';
import Examples from './components/Examples';
function App() {
  
  return (
      <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
