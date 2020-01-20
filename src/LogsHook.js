import { useState, useEffect } from 'react';
import { adDispatcher } from 'ubimo-fed-home-assigment';
import uuid from 'uuid/v4';

const LogsHook = () => {
    const [adLog, setAdLog] = useState([]);
    const [tempAds, setTempAds] = useState([]);

    useEffect(() => {
      let sub;
      try {
        sub = adDispatcher.adEvents$.subscribe({
          next(ad) {
            const newAd = {
              id: uuid(),
              date: new Date(),
              adType: ad.type,
              adCreative: ad.creative,
              adCoordinates: ad.coordinates
            };

            setAdLog([newAd, ...adLog]);

            setTempAds(prevState => [...prevState, newAd]);
            setTimeout(() => {
              setTempAds(prevState =>
                prevState.filter(ad => ad.id !== newAd.id)
              );
            }, 5000);
          }
        });
      } catch (error) {
        console.error('something wrong occurred: ' + error);
      }
      return () => sub.unsubscribe();
    }, [adLog]);

  return [adLog, tempAds];
}

export default LogsHook;
