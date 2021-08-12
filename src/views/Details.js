import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Details() {
  const history = useHistory();
  const location = useLocation();
  const widget = location.state;

  const [loading, setloading] = useState(true);
  const [widgetDetail, setWidgetDetail] = useState({});

  // API call
  useEffect(() => {
    (async () => {
      try {
        setWidgetDetail(
          await fetch(`api/widgets/${widget.id}`)
            .then((result) =>
              result.status <= 400 ? result : Promise.reject(result)
            )
            .then((result) => result.json())
            .catch((err) => {
              console.log(`get widget detail ERROR - ${err.message}`);
            })
        );
        setloading(false);
      } catch (e) {
        console.log('Get widget detail API error = ', e);
      }
    })();
  }, []);

  return (
    <div>
      {!loading ? (
        <div className='details-container'>
          <h1>{widgetDetail.name}</h1>
          <img className='icon' src={widgetDetail.image} alt='widget icon' />
          <div className='detail-col'>
            <div className='detail-col-1'>
              <h5>Property</h5>
              <p>ID</p>
              <p>Min</p>
              <p>Max</p>
              <p>Current</p>
              <p>History</p>
            </div>
            <div className='detail-col-2'>
              <h5>Value</h5>
              <p>{widgetDetail.id}</p>
              <p>{widgetDetail.min}</p>
              <p>{widgetDetail.max}</p>
              <p>{widgetDetail.current}</p>
              <p>{widgetDetail.history[0]}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
      <p onClick={() => history.push('/')}>back</p>
    </div>
  );
}
