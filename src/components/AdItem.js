import React from 'react';

const AdItem = ({ ad }) => {
  const x =
    ad.adCoordinates.x > 900 ? ad.adCoordinates.x - 400 : ad.adCoordinates.x;
  const y =
    ad.adCoordinates.y > 1500 ? ad.adCoordinates.y - 400 : ad.adCoordinates.y;
  
  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x
      }}
    >
      {ad.adType === 'IMAGE' ? (
        <img
          src={ad.adCreative.url}
          alt={ad.adCreative.name}
          width='115px'
          className='whiteBorder'
        />
      ) : (
        <video
          controls
          autoPlay={true}
          muted={true}
          width='115px'
          className='whiteBorder'
        >
          <source src={ad.adCreative.url} type='video/mp4' />
        </video>
      )}
    </div>
  );
}

export default AdItem;
