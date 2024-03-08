import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementByAmount} from './counterSlice';

export default function IncrementByAmount() {
  const [increment, setIncrement] = useState(0); 
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementByAmount(parseInt(increment)));
  };

  return (
    <div>
      <input 
        value={increment}
        onChange={event => setIncrement(event.target.value)}
      />
      <button onClick={handleIncrement}>Increment by this amount</button>
      <span>Updated Counter Value: {parseInt(count)}</span>
    </div>
  );
}
