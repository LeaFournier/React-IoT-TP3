import logo from './logo.svg';
import './App.css';
import Instant from './component/instantHeartrate';
import { useEffect, useState } from 'react';


function App() {
  const [measurement, setMeasurement] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setMeasurement(Instant);
    }, 2000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          Heartrate Monitoring
      </h1>
        <img src={logo} className="App-logo" alt="logo" />
      <Instant />  
      </header>
    </div>
  );


}

export default App;
