import React from 'react';

import AdItem from './AdItem';
import mapImage from '../assets/got-map.png';

const GotMap = ({ tempAds }) => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative'
      }}
    >
      <img src={mapImage} alt='got map' width='100%' />
      {tempAds && tempAds.map(ad => <AdItem key={ad.id} ad={ad} />)}
    </div>
  );
};

export default GotMap;
