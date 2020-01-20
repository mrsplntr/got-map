import React, { useState } from 'react';
import moment from 'moment';

import LogItem from './LogItem';

const LogList = ({ adLog }) => {
  const [filtered, setFiltered] = useState([]);
  const [inputs, setInputs] = useState({start: '', end: ''});

  const handleChange = e => {
    e.persist();
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value.trim()
    }));
  }

  const handleFilter = e => {
    if (e.key === 'Enter') {
      const newFiltered = adLog.filter(
        ad => {
          const start = moment(+inputs.start).unix();
          const end = moment(+inputs.end).unix();
          const date = moment(ad.date).unix();
          return date >= start && date <= end;
        }
      );

      setFiltered(newFiltered);
      setInputs({ start: '', end: '' });
    }
  };
  // Answer: I can implement my own filter method that will run from startIndex to endIndex. it will be O(n) but will reduce the iterations.

  return (
    <>
      <h2>Ads</h2>
      <form onKeyPress={handleFilter}>
        <input
          type='text'
          name='start'
          placeholder='Filter start'
          value={inputs.start}
          onChange={handleChange}
        />
        <span className='spacer' />
        <input
          type='text'
          name='end'
          placeholder='Filter end'
          value={inputs.end}
          onChange={handleChange}
        />
      </form>
      <span className='spacer' />
      {((filtered.length && filtered) || adLog).map(log => {
        const date = moment(log.date).format('HH:mm:ss');
        // To see date in Unix timecode use:
        // const date = log.date.getTime();
        return <LogItem key={log.id} log={{ ...log, date: date }} />;
      })}
    </>
  );
};

export default LogList
