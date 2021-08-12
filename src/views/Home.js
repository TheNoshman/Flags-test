import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const [widgetList, setwidgetList] = useState([]);

  // API call
  useEffect(() => {
    (async () => {
      let widgetResult;
      try {
        // widgetList = await getCompanyKeyAPI();
        setwidgetList(widgetResult);
      } catch (e) {
        console.log('Get widget list API error = ', e);
      }
    })();
  }, []);

  return (
    <div>
      <h1>All widgets</h1>
      <hr />
    </div>
  );
};

export default Home;
