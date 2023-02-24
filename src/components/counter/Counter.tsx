import { FC } from 'react';

interface CounterProps {
  count: number;
}

const Counter: FC<CounterProps> = ({ count }) => {
  return <p data-testid="counter">{count}</p>;
};

export default Counter;
