import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Details() {
  const history = useHistory();
  const location = useLocation();
  const widget = location.state;
  console.log('widg', widget.id);

  const [widgetDetail, setWidgetDetail] = useState([]);

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
            .then((result) => console.log('detail = ', result))
            .catch((err) => {
              console.log(`get widget detail ERROR - ${err.message}`);
            })
        );
      } catch (e) {
        console.log('Get widget detail API error = ', e);
      }
    })();
  }, []);

  return (
    <div>
      <h1>All widgets</h1>
      <hr />
      {/* {widgetDetail.length ? (
        <h1>done</h1>
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )} */}
      <p onClick={() => history.push('/')}>back</p>
    </div>
  );
}
