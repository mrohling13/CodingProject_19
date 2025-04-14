// Task 3: Single Tour Component

import React, { useState } from "react"; // imports from react

const TourCard = ({ id, name, info, image, price, onRemove }) => { // displays tour card information
 
 const [readMore, setReadMore] = useState(false); // allows user to read more about the tour


 return (
   <article className="tour-card">


     <img src={image} alt={name} className="tour-img" />
    
     <div className="tour-info">
       <div className="tour-header">
      
         <h2>{name}</h2>
         <h3 className="tour-price">${price}</h3>
       </div>
      
       
       <p>
         {readMore ? info : `${info.substring(0, 150)}...`}
         
         <button className="read-more" onClick={() => setReadMore(!readMore)}>
           {readMore ? "Show Less" : "Read More"}
         </button>
       </p>
      
       
       <button className="not-interested" onClick={() => onRemove(id)}>
         Not Interested
       </button>
     </div>
   </article>
 );
}


export default TourCard;
