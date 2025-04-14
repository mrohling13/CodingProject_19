// Task 2: Tour List Component

import React, { useEffect, useState } from 'react'; // imports from react 




import TourCard from './TourCard'; // imports tour card 


const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'; // the url used to get the tour information




const Gallery = ({ tours, setTours, onRemove }) => { // fetches and displays all tours


 const [loading, setLoading] = useState(true); 




 const [error, setError] = useState(false); // displays error message


 const fetchTours = async () => {
   try {
    
     setLoading(true);
     const response = await fetch(url);


    
     if (!response.ok) {
       throw new Error("Failed to fetch tours");
     }


     
     const data = await response.json();
     setTours(data);
   } catch (error) {
     console.log('Fetch error:', error);


     
     setError(true); // displays error if needed
   } finally {
    
     setLoading(false);
   }
 };


 
 useEffect(() => { // runs the fetchTours function
   fetchTours();
 }, []);





// Task 4: Loading and Error States
 
 if (loading) {
   return <h2>Loading...</h2>;
 }


 
 if (error) {
   return <h2>Something went wrong.</h2>;
 }




 
 if (tours.length === 0) {
   return (
     <div className="no-tours">
       <h2>No tours left</h2>
       <button onClick={fetchTours}>
         Refresh
       </button>
     </div>
   );
 }


 
 return ( // displays all tours
   <section className="gallery">
     {tours.map((tour) => (
       <TourCard
        
         key={tour.id}


        
         {...tour}


         
         onRemove={onRemove}
       />
     ))}
   </section>
 );
};


export default Gallery;
