// Task 1: Root Component

import React, { useState } from 'react';  // imports from react

import Gallery from './components/Gallery'; // imports gallery component


import './styles/styles.css'; // imports the css file for styling


function App() { // main component for the app


 const [tours, setTours] = useState([]); // lists all tours


 const removeTour = (id) => { // removes tour from the list


   setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // updates tour list
 };


 return (
   <main>


     <h1>Tour Explorer</h1>


     <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
   </main>
 );
}


export default App;