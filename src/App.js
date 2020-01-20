import React from 'react';

import LogsHook from './LogsHook';
import LogList from './components/LogList';
import GotMap from './components/GotMap';

import './App.css';

function App() {
  const [adLog, tempAds] = LogsHook();

  return (
    <div className='row'>
      <div className='column1'>
        <LogList adLog={adLog} />
      </div>
      <div className='column2'>
        <GotMap tempAds={tempAds} />
      </div>
    </div>
  );
}

export default App;
