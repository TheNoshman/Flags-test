import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Widget({ widget }) {
  const history = useHistory();
  return (
    <div
      className='widget'
      onClick={() =>
        history.push({
          pathname: '/details',
          state: widget,
        })
      }
    >
      <img className='icon' src={widget.image} alt='widget icon' />
      <h1>{widget.name}</h1>
    </div>
  );
}
