import logo from './logo.svg';
import './App.css';
import InstantHeartrate from './component/instantHeartrate';
import { useEffect, useState } from 'react';

function randomBpm() {
  return Math.floor(Math.random() * 160) + 40;
}

function App() {
  const [measurement, setMeasurement] = useState([50]);

  useEffect(() => {
    setInterval(() => {
    const bpm = { timestamp: new Date().getTime(),
      hearthrate: randomBpm(),
    };
    setMeasurement((prev) => [...prev, bpm]);
  }, 5000)
}, []) 
     
    const bpm = measurement[measurement.length - 1 ];

    console.log(measurement);

    console.log(bpm.timestamp);
 
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          Heartrate Monitoring
      </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <InstantHeartrate data={bpm.hearthrate} />
      </header>
    </div>
  );


}

export default App;
