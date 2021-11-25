import {useEffect} from "react";
import { ReactComponent as ItalyMap } from './it.svg';
import './App.css';
import React from 'react';

function App() {
  useEffect(() => {
    const ItalyMap = document.getElementById('italy-map-svg');
    ItalyMap.addEventListener('click', onMapClick);  
  }, [])

  function onMapClick(e) {
    const elemId = e.target.id;
    const elemTag = e.target.tagName;
    if (elemTag === 'path') {
      console.log(e.target.className);
      if (e.target.className && e.target.className.baseVal.includes('City_isActive')) {
        e.target.classList.remove('City_isActive');
      }
      else {
        e.target.classList.add('City_isActive');
      }
    }
  }
  return (
    <div className="App">
      <ItalyMap />
    </div>
  );
}

export default App;
