import React from 'react';

// TourCard component to display a single tour's details
function TourCard({ tour, onRemove }) {
  // Destructure the tour object to extract properties
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />

      {/* Display the tour name */}
      <h3 className="tour-name">{name}</h3>

      {/* Display the tour info */}
      <p className="tour-info">{info}</p>

      {/* Display the tour price */}
      <p className="tour-price">Price: ${price}</p>

      {/* "Not Interested" button to remove the tour */}
      <button
        className="not-interested-btn"
        onClick={() => onRemove(id)} // Call the onRemove function with the tour's id
      >
        Not Interested
      </button>
    </div>
  );
}

export default TourCard;