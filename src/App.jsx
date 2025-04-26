import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Gallery from './components/Gallery'; // Import the Gallery component

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading status
  const [loading, setLoading] = useState(true);
  // State to handle any errors during the fetch process
  const [error, setError] = useState(null);

  // Function to fetch tours data
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before starting the fetch
    try {
      // Fetch data from the API
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        // Throw an error if the response is not successful
        throw new Error('Failed to fetch tours');
      }
      // Parse the JSON response
      const data = await response.json();
      setTours(data); // Update the tours state with the fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      // Handle any errors that occur during the fetch
      setError(err.message);
    } finally {
      // Set loading to false after the fetch is complete
      setLoading(false);
    }
  };

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    fetchTours(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to handle removing a tour
  const handleRemoveTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Remove the tour with the given id
  };

  // Display a loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Display an error message if the fetch fails
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // If no tours are left, show a "Refresh" button
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="refresh-btn">
          Refresh
        </button>
      </div>
    );
  }}
