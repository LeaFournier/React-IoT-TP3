import logo from './logo.svg';
import './App.css';
import InstantHeartrate from './component/instantHeartrate';
import { useEffect, useState } from 'react';
import Graph from './component/LineChart';

function randomBpm() {
  return Math.floor(Math.random() * 160) + 40;
}

function App() {
  const [bpms, setBpms] = useState([50]);

  useEffect(() => {
  //setInterval(() => {
  //setBpms((prev) => [...prev, bpms]);
//}, 2000);
//}
    setInterval(() => {
      setBpms((prev) => {
      const bpm = {
      timestamp: new Date().getTime(),
      heartrate: randomBpm(),
      };
       return [...prev, bpm];
    });
    }, 5000)
}, []);

  //useEffect(() => {
  //const client = mqtt.connect(MQTT_broker_url);
  //client.on('message', (topic, message)) => {
    //setBpms((prev) => [...prev, parseMessage(message)]);
  //});
  //client.subscribe('heartrate');
  //client.publish('clients','BF');
  //return() => client.end();
  //}, [];

  const bpm = bpms[bpms.length - 1 ];

  console.log(bpms);

  return (
    <div className="App">
      <header className="App-header">
        <p>Monitoring de rythme cardiaque</p>
        <img src={logo} className="App-logo" alt="logo" />
        <InstantHeartrate data={bpm.heartrate} />
        <Graph data={bpms} />
      </header>
    </div>
  );
}

export default App;
