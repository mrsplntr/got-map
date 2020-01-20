import React from 'react';

import imageIcon from '../assets/icons/ic_image_black_24px.svg';
import movieIcon from '../assets/icons/ic_movie_creation_black_24px.svg';
import linkIcon from '../assets/icons/ic_insert_link_black_24px.svg';

const LogItem = ({ log }) => {
  return (
    <div key={log.id}>
      {log.date}{' '}
      {
        <img
          src={log.adType === 'IMAGE' ? imageIcon : movieIcon}
          alt={log.adType}
          width='12px'
        />
      }
      {log.adCreative.name}
      <a href={log.adCreative.url}>
        <img src={linkIcon} alt={log.adCreative.name} width='12px' />
      </a>
    </div>
  );
}

export default LogItem;
