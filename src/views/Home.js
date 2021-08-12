import React, { useEffect, useState } from 'react';
import Widget from '../components/Widget';

const Home = () => {
  const [widgetList, setwidgetList] = useState([]);

  // API call
  useEffect(() => {
    (async () => {
      try {
        setwidgetList(
          await fetch(`api/widgets`)
            .then((result) =>
              result.status <= 400 ? result : Promise.reject(result)
            )
            .then((result) => result.json())
            .catch((err) => {
              console.log(`get widget list ERROR - ${err.message}`);
            })
        );
      } catch (e) {
        console.log('Get widget list API error = ', e);
      }
    })();
  }, []);

  return (
    <div>
      <h1>All widgets</h1>
      <hr />
      {widgetList.length ? (
        widgetList.map((widget, i) => {
          return <Widget widget={widget} key={widget.id} />;
        })
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
