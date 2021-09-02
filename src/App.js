import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [colorScheme, setColorScheme] = useState(null);
  const [isColorPickerActive, setIsColorPickerActive] = useState(false);

  useEffect(() => {
    console.log("RENDER");
    if (colorScheme) {
      document.querySelector('body').style.backgroundColor = colorScheme;
    }
  }, [colorScheme]);


  const colorData = [
    {
      id: 1,
      name: 'red',
      color: '#C62828',
    },
    {
      id: 2,
      name: 'pink',
      color: '#EC407A',
    },
    {
      id: 3,
      name: 'purple',
      color: '#AB47BC',
    },
    {
      id: 4,
      name: 'DEEP PURPLE',
      color: '#5E35B1',
    },
    {
      id: 5,
      name: 'blue',
      color: '#2196F3',
    },
    {
      id: 6,
      name: 'light blue',
      color: '#4FC3F7',
    },
    {
      id: 7,
      name: 'cyan',
      color: '#4DD0E1',
    },
    {
      id: 8,
      name: 'teal',
      color: '#00897B',
    },
    {
      id: 9,
      name: 'green',
      color: '#00C853',
    },
    {
      id: 10,
      name: 'light green',
      color: '#8BC34A',
    },
    {
      id: 11,
      name: 'yellow',
      color: '#FDD835',
    },
    {
      id: 12,
      name: 'orange',
      color: '#FF5722',
    },
    {
      id: 13,
      name: 'brown',
      color: '#6D4C41',
    },
    {
      id: 14,
      name: 'black',
      color: '#212121',
    },
    {
      id: 15,
      name: 'choco',
      color: '#3E2723',
    },
  ];


  return (
    <div className="App">
     
     <section className="color__picker__container">
     <div className="color__picker" >
        <span 
          onMouseOverCapture={() => setIsColorPickerActive(true)}
          onClick={() => setIsColorPickerActive(!isColorPickerActive)} > 
            {isColorPickerActive ?   <strong>&#8855;</strong> : <strong>&#8858;</strong>  }
          </span>
        {isColorPickerActive && <div className="color__schemes" onMouseLeave={()=> setIsColorPickerActive(false)}>
         {colorData.map( color => {
           console.log(color);
           return <button key={color.id} onClick={() => { setColorScheme(`${color.color}`); setIsColorPickerActive(false); }} style={{ background: `${color.color}` }} ></button>
         })}
        </div>}
      </div>
     </section>

    </div>
  );
}

export default App;

