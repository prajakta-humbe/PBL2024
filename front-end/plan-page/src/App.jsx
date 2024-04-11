import React, { useState } from 'react';
import NavBar from '../../signUp-page/src/components/NavBar';
import './App.css'

const Plan = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const planTrip = () => {
    window.location.href = `PlanTrip.html?destination=${destination}&startDate=${startDate}&endDate=${endDate}`;
  }

  return (
    <div style={styles.complete2}>
    <NavBar></NavBar>
    <div className="main" style={styles.main}>
      <h1 style={{ color: '#2D3678' }}>Plan New Trip</h1>
      <input
        type="text"
        id="destination"
        placeholder="Enter destination eg: Goa, Mumbai"
        style={styles.input}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <div className="Dates" style={styles.dates}>
        <div className="connectDates">
          <p>Start Date</p>
          <input
            type="date"
            id="startDate"
            style={styles.input}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="connectDates">
          <p>End Date</p>
          <input
            type="date"
            id="endDate"
            style={{ ...styles.input, marginLeft: '20px' }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button id="button" onClick={planTrip} style={styles.button}>Start Planning</button>
    </div>
    </div>
  );
}

export default Plan;

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '5px solid black',
    borderRadius: '30px',
    height: '400px',
    width: '600px',
    marginLeft: '450px',
    marginTop: '150px',
    backgroundColor:'white',
    overflowX: 'hidden',
  },
  dates: {
    display: 'flex',
    flexDirection: 'row',
  },
  connectDates: {
    justifyContent: 'space-between',
  },
  input: {
    height: '40px',
    width: '200px',
  },
  button: {
    height: '40px',
    width: '150px',
    backgroundColor: '#2D3678',
    borderRadius: '15px',
    backgroundcolor: 'aliceblue',
    color:'#f7ebcc',
  },
  complete2:{
  backgroundImage: 'url(../src/components/images/p2img.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', /* Cover the entire container */
  backgroundPosition: 'center', /* Center the background image */
  height: '712px', /* Ensure the container has enough height to display the background */
  overflow: 'hidden', /* Hide any overflow content */
  },
};

