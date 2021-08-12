import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Details() {
  const history = useHistory();
  return (
    <div>
      <h1>DETAILS</h1>
      <p onClick={() => history.push('/')}>back</p>
    </div>
  );
}
