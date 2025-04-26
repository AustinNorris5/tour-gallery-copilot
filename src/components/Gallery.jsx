import React from 'react';
import TourCard from './TourCard'; // Import the TourCard component

// Gallery component to display a list of tours
function Gallery({ tours, onRemoveTour }) {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard 
          key={tour.id} // Use the tour's id as the unique key
          tour={tour} // Pass the tour object as a prop to TourCard
          onRemove={onRemoveTour} // Pass the onRemoveTour function as a prop to handle removal
        />
      ))}
    </div>
  );
}

export default Gallery;